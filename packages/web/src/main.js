import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// testing common func

const CommonFunction = require("common");

CommonFunction();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
