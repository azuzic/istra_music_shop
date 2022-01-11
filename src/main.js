import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";
import "./assets/tailwind.css";
import { init } from "@emailjs/browser";
init("user_s3PvQJakdM1y9xnn80F4d");
import "vue-croppa/dist/vue-croppa.css";

import "animate.css";

Vue.config.productionTip = false;
Vue.use(Croppa);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
