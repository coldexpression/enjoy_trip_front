// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from "./store/index";
import Vue from "vue";
import App from "./App";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import "./assets/css/detail.css";
// import "./assets/css/error.css";
// import "./assets/css/include.css";
// import "./assets/css/index.css";
// import "./assets/css/map.css";
// import "./assets/css/user.css";

Vue.config.productionTip = false;
library.add(fas, far, fab, faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: "<App/>",
  store
  // store: require("./store/modules/userStore.js")
}).$mount("#app");
