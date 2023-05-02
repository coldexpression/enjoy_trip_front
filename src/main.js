// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from "./store/userStore";
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueSession from "vue-session";
import Vuex from "vuex";

var sessionOptions = {
  persist: true
};
Vue.config.productionTip = false;
Vue.use(VueSession, sessionOptions);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
