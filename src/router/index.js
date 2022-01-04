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
    path: "/korisnik-podaci",
    name: "KorisnikPodaci",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/KorisnikPodaci.vue"),
  },
  {
    path: "/djelatnik",
    name: "Djelatnik",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Djelatnik.vue"),
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
router.beforeEach((to, from, next) => {
  //console.log("going from", from, " to ", to);
  const noUser = store.currentUser === null;
  if (noUser && to.meta.needsUser) {
    next("Prijava");
  } else {
    if (from.name === "Registracija" && to.name !== "Prijava") {
      wait(5).then(() => {
        next();
      });
    } else {
      next();
    }
  }
});
export default router;
