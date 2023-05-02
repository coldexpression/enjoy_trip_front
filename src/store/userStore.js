import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userStore = new Vuex.Store({
  // 초기 상태
  state: {
    userInfo: {
      userId: "",
      userEmail: "",
      isCheck: false
    }
  },
  // state를 변경시킬수 있는 유일한 방법
  mutations: {
    login(state, payload) {
      state.userInfo.userId = payload.id;
      state.userInfo.userEmail = payload.email;
      state.userInfo.isCheck = payload.isCheck;
    },
    logout(state) {
      state.userInfo.userId = "";
      state.userInfo.userEmail = "";
      state.userInfo.isCheck = false;
    }
  },
  loginCheck(state) {
    if (state.isCheck) {
      console.log("로그인 안함");
    } else {
      console.log("로그인 함");
    }
  },
  // 공동의 상태를 계산하여 state의 값을 반환
  getters: {
    getLoginState: state => {
      console.log("상태 조회 : ", state);
      return state.userInfo.isCheck;
    },
    getUserId: state => {
      return state.userInfo.userId;
    },
    getUserEmail: state => {
      return state.userInfo.userEmail;
    }
  },
  // actions 는 mutations 와 달리 비도기적 로직을 정의 할 수 있음
  actions: {}
});

export default userStore;
