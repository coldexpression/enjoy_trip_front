// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from "./store/index";
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
// import "./assets/css/detail.css";
// import "./assets/css/error.css";
// import "./assets/css/include.css";
// import "./assets/css/index.css";
// import "./assets/css/map.css";
// import "./assets/css/user.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: "<App/>",
  store
  // store: require("./store/modules/userStore.js")
}).$mount("#app");
