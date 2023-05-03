import Vuex from "vuex";
import Vue from "vue";
import userStore from "./modules/userStore";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    userStore
  }
});
