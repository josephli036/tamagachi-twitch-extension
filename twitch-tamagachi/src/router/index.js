import Vue from "vue";
import VueRouter from "vue-router";
import Panel from "../components/Panel.vue";
import Leaderboard from "../components/Leaderboard.vue"
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaderboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
