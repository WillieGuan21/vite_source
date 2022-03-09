import { createRouter, createWebHashHistory } from "vue-router";
// import store from "../store";
import Home from "../views/home/index.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "home page",
      keepAlive: true,
      name: "Home",
    },
    component: Home,
  },
  // {
  //   path: "/auth",
  //   name: "Auth",
  //   meta: {
  //     title: "auth",
  //   },
  //   component: () => import("../views/auth/index.vue"),
  // },
  // {
  //   path: "/warningSetting",
  //   name: "WarningSetting",
  //   meta: {
  //     title: "告警通知設定",
  //   },
  //   component: () => import("../views/warning-setting/index.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
