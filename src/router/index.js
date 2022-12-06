import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/homeDetail",
    name: "homeDetail",
    // route level code-splitting
    // this generates a separate chunk (homeDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "homeDetail" */ "../views/HomeDetail.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/platform",
    name: "platform",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlatformView.vue"),
  },
  {
    path: "/platformDetail",
    name: "platformDetail",
    // route level code-splitting
    // this generates a separate chunk (platformDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "platformDetail" */ "../views/PlatformDetail.vue"
      ),
  },
  {
    path: "/wallet",
    name: "wallet",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WalletView.vue"),
  },
  {
    path: "/walletDetail",
    name: "walletDetail",
    // route level code-splitting
    // this generates a separate chunk (walletDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "walletDetail" */ "../views/WalletDetail.vue"
      ),
  },
  {
    path: "/block",
    name: "block",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlockView.vue"),
  },
  {
    path: "/blockDetail",
    name: "blockDetail",
    // route level code-splitting
    // this generates a separate chunk (blockDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blockDetail" */ "../views/BlockDetail.vue"),
  },
  {
    path: "/rank",
    name: "rank",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RankView.vue"),
  },
  {
    path: "/info",
    name: "info",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InfoView.vue"),
  },
  {
    path: "/infoDetail",
    name: "infoDetail",
    // route level code-splitting
    // this generates a separate chunk (infoDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "infoDetail" */ "../views/InfoDetail.vue"),
  },
  {
    path: "/fastInfo",
    name: "fastInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FastInfoView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
