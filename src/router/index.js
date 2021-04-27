import Recommend from "../pages/Recommend.vue";
import Question from "../pages/Question.vue";
import NotFound from "../pages/NotFound.vue";
import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Question,
    },
    {
      path: "/recommend",
      component: Recommend,
    },
    {
      path: "/finished",
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
