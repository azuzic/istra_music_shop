import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { init } from "@emailjs/browser";
init("user_s3PvQJakdM1y9xnn80F4d");

import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");