import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Profile from "@/components/MyProfile";

Vue.use(Vuetify);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Profile/:id",
      name: "Profile",
      component: Profile
    }
  ]
});
