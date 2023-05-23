import Vuex from "vuex";
import Vue from "vue";
import userStore from "./modules/userStore";
import attractionStore from "./modules/attractionStore";
import boardStore from "./modules/boardStore";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    userStore,
    attractionStore,
    boardStore
  }
});
