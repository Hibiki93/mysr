<template>
    <v-container>
        <h1>Suggestion Here!</h1>
        <v-container>
            <v-layout align-start justify-start row>
                    <suggestionBox 
                    v-for="(suggestion, index) in suggestions"
                    v-bind:key="index"
                    v-bind:reason="suggestion.reason"
                    v-bind:description="suggestion.description"
                    v-bind:title="suggestion.title">
                    <comments-box
                    :suggestionID="suggestion"
                    />
                    </suggestionBox>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import suggestionBox from "./Suggestion";
import commentsBox from "./Commentsbox";
import db from './../database/fbinit';

export default {
    mounted() {
        console.log('created ============');
    db.collection('suggestions').onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((suggestionQuery) => {
            if (suggestionQuery.type === 'added') {
                this.$set(
                    this.suggestions,
            suggestionQuery.doc.id,
            Object.assign(
                { id: suggestionQuery.doc.id }, suggestionQuery.doc.data(),
            ));
        }
        if (suggestionQuery.type === 'modified') {
            this.$set(this.suggestions, suggestionQuery.doc.id, suggestionQuery.doc.data());
        }
        if (suggestionQuery.type === 'removed') {
            this.$delete(this.suggestions, suggestionQuery.doc.id);
        }
      });
    });
  },
  data () {
      return {
          suggestions: {}
      }
  },
  components: { suggestionBox , commentsBox},
}
</script>
