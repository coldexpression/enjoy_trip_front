import axios from "../../assets/js/axios";
import router from "../../router";

const boardStore = {
  namespaced: true,
  // 초기 상태
  state: {
    boardInfo: {
      userID: "",
      title: "",
      content: "",
      readCount: 0,
      writeDate: ""
    },
    boardList: []
  },
  // state를 변경시킬수 있는 유일한 방법
  mutations: {
    MU_LOAD_BOARD_INFO(state, payload) {
      state.boardInfo = payload;
    },
    MU_LOAD_BOARD_LIST(state, payload) {
      state.boardList = payload;
    }
  },
  // 공동의 상태를 계산하여 state의 값을 반환
  getters: {
    GET_BOARD_INFO: state => {
      console.log("GET_BOARD_INFO!");
      console.log(state.boardInfo);
      return state.boardInfo;
    },
    GET_BOARD_LIST: state => {
      console.log("GET_BOARD_LIST!");
      console.log(state.boardList);
      return state.boardList;
    }
  },
  // actions 는 mutations 와 달리 비도기적 로직을 정의 할 수 있음
  actions: {
    AC_BOARD_LIST_LOAD: (context, payload) => {
      console.log("AC_BOARD_LIST_LOAD");
      axios.get("board/list").then(res => {
        console.log("게시글 조회 성공");
        console.log(res.data);
        context.commit("MU_LOAD_BOARD_LIST", res.data);
      });
    }
  }
};

export default boardStore;
