import { createRouter, createWebHashHistory } from "vue-router";
// import store from "../store";
import Home from '../views/home/index.vue'
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
  {
    path: "/auth",
    name: "Auth",
    meta: {
      title: "auth",
    },
    component: () => import("../views/auth/index.vue"),
  },
  {
    path: "/warningSetting",
    name: "WarningSetting",
    meta: {
      title: "告警通知設定",
    },
    component: () => import("../views/warning-setting/index.vue"),
  },
  {
    path: "/realTimeDataSearch",
    name: "RealTimeDataSearch",
    meta: {
      title: "環境監控即時資料查詢",
    },
    component: () => import("../views/realtime-search/index.vue"),
  },
  {
    path: "/history",
    name: "History",
    meta: {
      title: "歷史資料",
    },
    component: () => import("../views/history/index.vue"),
  },
  {
    path: "/alarmStatistics",
    name: "AlarmStatistics",
    meta: {
      title: "告警統計",
    },
    component: () => import("../views/alarm-statistics/index.vue"),
  },
  {
    path: "/bulletinBoard",
    name: "BulletinBoard",
    meta: {
      title: "即時告警佈告欄",
    },
    component: () => import("../views/bulletin/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
