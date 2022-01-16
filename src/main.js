import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";
import VuejsDialog from "vuejs-dialog";
import "./assets/tailwind.css";
import "vue-croppa/dist/vue-croppa.css";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import { init } from "@emailjs/browser";
init("user_s3PvQJakdM1y9xnn80F4d");


Vue.config.productionTip = false;
Vue.use(Croppa);
Vue.use(VuejsDialog, {
  okText: "Nastavi",
  cancelText: "Odustani",
  animation: "bounce",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
