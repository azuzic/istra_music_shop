import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registracija",
    name: "Registracija",
    component: () => import("../views/Registracija.vue"),
  },
  {
    path: "/prijava",
    name: "Prijava",
    component: () => import("../views/Prijava.vue"),
  },
  {
    path: "/password-reset",
    name: "PasswordReset",
    component: () => import("../views/PasswordReset.vue"),
  },
  {
    path: "/racun",
    name: "Racun",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Racun.vue"),
  },
  {
    path: "/otkup-opreme",
    name: "OtkupOpreme",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/OtkupOpreme.vue"),
  },
  {
    path: "/status-otkupa",
    name: "StatusOtkupa",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/StatusOtkupa.vue"),
  },
  {
    path: "/djelatnik",
    name: "Djelatnik",
    meta: {
      needsUser: true,
      admin: true,
    },
    component: () => import("../views/Djelatnik.vue"),
  },
  {
    path: "/pregled-otkupa",
    name: "PregledOtkupa",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/PregledOtkupa.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};
//next() -> slazem se s promjenom rute
router.beforeEach((to, from, next) => {

  const noUser = store.currentUser === null;
  if (noUser && to.meta.needsUser) {
    next("Prijava");
  } else {
    if(to.meta.admin && store.currentUser!== "djelatnik@gmail.com"){
      next("Racun");
    }
    else if(
      from.name === "Registracija" &&
      to.name !== "Prijava" &&
      to.name !== "Home"
    ) {
      wait(3).then(() => {
        next();
      });
    } else {
      next();
    }
  }
});
export default router;
