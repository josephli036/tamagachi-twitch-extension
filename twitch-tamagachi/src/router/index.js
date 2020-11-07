import Vue from "vue";
import VueRouter from "vue-router";
import Panel from "../components/Panel.vue";
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
