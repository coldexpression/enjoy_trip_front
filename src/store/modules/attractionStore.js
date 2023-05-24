import axios from "../../assets/js/axios";
import router from "../../router";

const attractionStore = {
  namespaced: true,
  // 초기 상태
  state: {
    topInfo: [],
    attractionTitle: "",
    attractionDetail: {
      contentId: "",
      title: "",
      addr1: "",
      addr2: "",
      firstImage: "",
      firstImage2: "",
      latitude: 0,
      longitude: 0,
      readCount: 0,
      likeCount: 0,
      overView: 0
    },
    attractionList: [],
    attractionCount: 0
  },
  // state를 변경시킬수 있는 유일한 방법
  mutations: {
    MU_LOAD_TOP_INFO(state, payload) {
      state.topInfo = payload;
    },
    MU_LOAD_ATTRACTION_DETAIL_INFO(state, payload) {
      state.attractionDetail = payload;
    },
    MU_LOAD_ATTRACTION_LIST(state, payload) {
      console.log("MU! LOAD ", payload);
      state.attractionList = payload.list;
      state.attractionCount = payload.count;
    },
    MU_LOAD_ATTRACTION_TITLE(state, payload) {
      state.attractionTitle = payload;
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
    },
    GET_ATTRACTION_LIST: state => {
      console.log("GET_ATTRACTION_LIST!");
      console.log(state.attractionList);
      return state.attractionList;
    },
    GET_ATTRACTION_TITLE: state => {
      console.log("GET_ATTRACTION_TITLE !!");
      console.log(state.attractionTitle);
      return state.attractionTitle;
    },
    GET_ATTRACTION_LIST_COUNT: state => {
      return state.attractionCount;
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
      console.log("payload : " + payload);
      axios.get(`attraction/${payload}`).then(res => {
        console.log("관광지 상세 정보 조회 성공");
        console.log(res.data);
        context.commit("MU_LOAD_ATTRACTION_DETAIL_INFO", res.data);
      });
    },
    AC_ATTRACTION_LIST_LOAD: async (context, payload) => {
      console.log("AC_ATTRACTION_LIST_LOAD");
      console.log("payload : " + payload);
      const sidoCode = payload.sidoCode;
      const currentPage = payload.currentPage;
      const perPage = payload.perPage;
      if (sidoCode == undefined) {
        axios.get("attraction/list").then(res => {
          console.log("관광지 상세 정보 조회 성공");
          console.log(res.data);
          context.commit("MU_LOAD_ATTRACTION_LIST", res.data);
        });
      } else {
        const count = await axios
          .get(`attraction/list/${sidoCode}/count`)
          .then(res => {
            console.log("관광지 목록 카운트 조회 성공");
            console.log(res);
            console.log(res.data);
            return res.data;
          });

        console.log("카운트 조회 : ", count);
        await axios
          .get(`attraction/list/${sidoCode}`, {
            params: {
              currentPage: currentPage,
              perPage: perPage
            }
          })
          .then(res => {
            console.log("관광지 목록 정보 조회 성공");
            console.log(res.data);
            const listInfo = {
              list: res.data,
              count: count
            };
            console.log("paylaod~~ : ", listInfo);
            context.commit("MU_LOAD_ATTRACTION_LIST", listInfo);
          });
      }
    },
    AC_ATTRACTION_TITLE_LOAD: (context, payload) => {
      console.log("AC_ATTRACTION_TITLE_LOAD");
      console.log("payload : ", payload);
      context.commit("MU_LOAD_ATTRACTION_TITLE", payload);
    }
  }
};

export default attractionStore;
