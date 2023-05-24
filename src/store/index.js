import Vuex from "vuex";
import Vue from "vue";
import userStore from "./modules/userStore";
import attractionStore from "./modules/attractionStore";
import boardStore from "./modules/boardStore";
import { createVuexPersistedState } from "vue-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
      whiteList: ["userStore"]
    })
  ],
  modules: {
    userStore,
    attractionStore,
    boardStore
  }
});
