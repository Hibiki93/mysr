<template>
  <div>
    <v-bottom-sheet>
      <v-btn slot="activator" color="purple" dark  @click="handleClick"
      >Comments</v-btn>
      <v-list>
        <v-subheader>Comment {{suggestionID.id}}</v-subheader>
        <ul>
            <li
            v-for="(comment , index) in commentData"
            v-bind:key="index"
            v-bind:author="comment.author"
            v-bind:comment="comment.comment"
            > 
            {{comment.author}} : {{comment.comment}}
            </li>
        </ul>
        <comment 
          :suggestionID="suggestionID"
        />
      </v-list>
      <v-card>
  <v-textarea
    outline
    name="inputCommentBox"
    label="Add Your Comment Here..."
    auto-grow
    value=""
    v-model= "inputComment"
    v-on:keyup.enter = "enterComment"
    />
</v-card>
</v-bottom-sheet>
  </div>
</template>

<script>
import db from "./../database/fbinit";
import addComment from "./../components/AddCommentsBox";

export default {
  data() {
    return {
      commentData: {},
      inputComment: ''
    };
  },
  methods: {
    handleClick() {
      db
        .collection("suggestions")
        .doc(this.suggestionID.id)
        .collection("comments")
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(commentDatas => {
            if (commentDatas.type === "added") {
              console.log("added ===========");
              this.$set(
                this.commentData,
                commentDatas.doc.id,
                commentDatas.doc.data()
              );
              localStorage.setItem(
                commentDatas.doc.id,
                commentDatas.doc.data()
              );
            }
            if (commentDatas.type === "modified") {
              this.$set(
                this.commentData,
                commentDatas.doc.id,
                commentDatas.doc.data()
              );
            }
            if (commentDatas.type === "removed") {
              this.$delete(
                this.commentData,
                commentDatas.doc.id,
                commentDatas.doc.data()
              );
            }
          });
        });
    },
    enterComment() {
      db.collection("suggestions").doc(this.suggestionID.id).collection("comments").add({
        comment: this.inputComment
      });
      this.inputComment = '';
    },
  },
  props: ["suggestionID"],
  components: { addComment }
};
</script>
