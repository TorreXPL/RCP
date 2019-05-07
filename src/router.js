import Vue from "vue";
import Router from "vue-router";
import ActionPage from "./pages/ActionPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import StartPage from "./pages/StartPage.vue";
import SuccessfulActionPage from "./pages/SuccessfulActionPage.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "FrontPage",
      component: StartPage
    },
    {
      path: "/action",
      name: "ActionPage",
      component: ActionPage,
      props: true
    },
    {
      path: "/success",
      name: "SuccessPage",
      component: SuccessfulActionPage
    },
    {
      path: "/error",
      name: "ErrorPage",
      component: ErrorPage
    }

  ]
});
