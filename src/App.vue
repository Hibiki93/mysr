<template>
  <v-app id="inspire">
    <!-- right side menu -->
    
    <!-- top menu -->
    <v-toolbar color="red darken-2" dark fixed app>
      <router-link to="/">
      <v-toolbar-title class="white--text ">Suara Rakyat</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down" >
        <router-link to="/Home" >
          <v-btn flat >Suggestion</v-btn>
        </router-link>
          <router-link to="/Profile/48">
            <v-btn flat >My Proflie</v-btn>
          </router-link>          
            <router-link to="/Login">
              <v-btn flat >LogIn</v-btn>
            </router-link>
      </div>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
      <v-container>
        
      </v-container>
    </v-content>

<!-- footer -->
    <v-footer color="red darken-2" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import db from './database/fbinit';

export default {
  name: "app",
  data: () => ({
    drawer: null  
  }),
};
</script>


<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
