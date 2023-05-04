import axios from "../../assets/js/axios";
import router from "../../router";

const attractionStore = {
  namespaced: true,
  // 초기 상태
  state: {
    topInfo: [],
    attractionDetail: {
      content_id: "",
      title: "",
      addr1: "",
      addr2: "",
      first_image: "",
      first_image2: "",
      latitude: 0,
      longitude: 0,
      readCount: 0,
      likeCount: 0,
      overView: 0
    }
  },
  // state를 변경시킬수 있는 유일한 방법
  mutations: {
    MU_LOAD_TOP_INFO(state, payload) {
      state.topInfo = payload;
    },
    MU_LOAD_ATTRACTION_DETAIL_INFO(state, payload) {
      state.attractionDetail = payload;
    }
  },
  // 공동의 상태를 계산하여 state의 값을 반환
  getters: {
    GET_TOP_INFO: state => {
      console.log("GET_TOP_INFO !");
      console.log(state.topInfo);
      return state.topInfo;
    },
    GET_ATTRACTION_DETAIL_INFO: state => {
      console.log("GET_ATTRACTION_DETAIL_INFO!");
      console.log(state.attractionDetail);
      return state.attractionDetail;
    }
  },
  // actions 는 mutations 와 달리 비도기적 로직을 정의 할 수 있음
  actions: {
    AC_TOP_INFO_LOAD: context => {
      console.log("AC_TOP_INFO_LOAD!");
      axios.get("attraction/top4").then(res => {
        console.log("관광지 TOP4 데이터 조회 성공");
        console.log(res.data);
        context.commit("MU_LOAD_TOP_INFO", res.data);
      });
    },
    AC_ATTRACTION_DETAIL_INFO_LOAD: (context, payload) => {
      console.log("AC_ATTRACTION_DETAIL_LOAD");
      axios.get(`attraction/${payload}`).then(res => {
        console.log("관광지 상세 정보 조회 성공");
        console.log(res.data);
        context.commit("MU_LOAD_ATTRACTION_DETAIL_INFO", res.data);
      });
    }
  }
};

export default attractionStore;
