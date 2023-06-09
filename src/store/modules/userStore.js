import axios from "../../assets/js/axios";
import router from "../../router";
import VueCookies from "vue-cookies";
const userStore = {
  namespaced: true,
  // 초기 상태
  state: {
    userInfo: {
      userId: "",
      userEmail: "",
      isCheck: false,
      bookMark: [],
      accessToken: ""
    }
  },
  // state를 변경시킬수 있는 유일한 방법
  mutations: {
    MU_LOGIN(state, payload) {
      state.userInfo.userId = payload.userId;
      state.userInfo.userEmail = payload.userEmail;
      state.userInfo.isCheck = payload.isCheck;
      state.userInfo.accessToken = payload.accessToken;
      VueCookies.set("accessToken", payload.accessToken);
    },
    MU_LOGOUT(state) {
      state.userInfo.userId = "";
      state.userInfo.userEmail = "";
      state.userInfo.isCheck = false;
      state.userInfo.bookMark = [];
      state.userInfo.accessToken = "";
      VueCookies.remove("accessToken");
    },
    MU_LOAD_BOOKMARK(state, payload) {
      state.userInfo.bookMark = payload;
    },
    MU_EDIT_BOOKMARK(state, payload) {
      state.userInfo.bookMark = payload.bookMark;
    }
  },
  // 공동의 상태를 계산하여 state의 값을 반환
  getters: {
    GET_LOGIN_STATE: state => {
      console.log("상태 조회 : ", state);
      return state.userInfo.isCheck;
    },
    GET_USER_ID: state => {
      return state.userInfo.userId;
    },
    GET_USER_EMAIL: state => {
      return state.userInfo.userEmail;
    },
    GET_USER_BOOKMARK: state => {
      console.log("북마크 조회 값 : ", state.userInfo.bookMark);
      return state.userInfo.bookMark;
    },
    GET_TOKEN: state => {
      console.log("GET_ TOKEN!!");
      console.log(state);
      let ac = VueCookies.get("accessToken");
      return ac;
    }
  },
  // actions 는 mutations 와 달리 비도기적 로직을 정의 할 수 있음
  actions: {
    AC_USER_LOGIN: async (context, payload) => {
      console.log("AC_USER_LOGIN!");
      console.log(payload);
      const id = payload.id.value;
      const pwd = payload.pwd.value;

      try {
        const response = await axios.post("user/login", {
          id: id,
          pwd: pwd
        });
        console.log("로그인 성공");
        console.log(response.data);
        const resultUser = {
          userId: response.data.id,
          userEmail: response.data.email,
          isCheck: true,
          accessToken: response.data.accessToken
        };

        console.log(resultUser);
        context.commit("MU_LOGIN", resultUser);
        // this.$store.commit("login", resultUser);
        router.push("/");
        // console.log(this.$store.getters.getLoginState);
        return true;
      } catch (e) {
        console.log("에러 : ", e);
        console.log("로그인 실패!");
        return false;
      }
    },
    AC_USER_LOGOUT: (context, payload) => {
      console.log("AC_USER_LOGOUT!");
      context.commit("MU_LOGOUT");
      console.log(payload);
      router.push("/");
    },
    AC_USER_EDIT: async (context, payload) => {
      console.log("AC_USER_EDIT!");
      console.log(payload);
      const User = {
        id: payload.id,
        pwd: payload.pwd,
        newPwd: payload.newPwd,
        email: payload.email,
        advertisement: false
      };
      console.log("User : ", User);
      try {
        const response = await axios.put("user", User);
        console.log("회원 정보 수정 성공");
        console.log(response.data);
        const resultUser = {
          userId: payload.id,
          userEmail: payload.email,
          isCheck: true
        };
        context.commit("MU_LOGIN", resultUser);
        alert("회원 정보 수정 성공");
        router.push("/");
      } catch (e) {
        console.log(e);
        console.log("회원 수정 실패");
        alert("회원 정보 수정 실패");
      }
    },
    AC_USER_LOAD_BOOKMARK: async (context, payload) => {
      console.log("AC_USER_LOAD_BOOKMARK !!");
      console.log("유저 아이디 : " + payload);
      try {
        const respone = await axios.get("attraction/userFavorite");
        console.log("북마크 호출 성공");
        console.log(respone.data);
        context.commit("MU_LOAD_BOOKMARK", respone.data);
      } catch (e) {
        console.log("북마크 호출 실패");
        console.log(e);
      }
    },
    AC_USER_SIGNUP: async (context, payload) => {
      console.log("AC_USER_SIGNUP !!");
      console.log("가입 정보 : ", payload);
      const user = {
        id: payload.newId,
        pwd: payload.newPwd,
        email: payload.newEmail
      };
      try {
        const respone = await axios.post("user/signup", user);
        console.log("회원 가입 성공 !");
        console.log(respone);
        router.push("/login");
        return true;
      } catch (e) {
        console.log("회원 가입 실패!");
        console.log(e);
        return false;
      }
    },
    AC_USER_DELETE: async (context, payload) => {
      console.log("AC_USER_DELETE");
      console.log("회원 정보 : ", payload);
      const user = {
        id: payload.id,
        pwd: payload.pwd
      };
      try {
        const response = await axios.post("user", user);
        console.log("탈퇴 성공!");
        console.log(" 응답 객체 : ", response);
        context.commit("MU_LOGOUT");
        router.push("/");
        return true;
      } catch (e) {
        console.log("탈퇴 실패 ㅠㅠ");
        console.log(e);
        return false;
      }
    },
    AC_EDIT_BOOKMARK: (context, payload) => {
      console.log("AC_EDIT_BOOKMARK");
      console.log("북마크 정보 : ", payload);
      context.commit("MU_EDIT_BOOKMARK", payload);
    },
    AC_REGIST_BOOKMARK: (context, payload) => {
      console.log("AC_REGIST_BOOKMARK !!!");
      axios
        .post(`attraction/${payload.contentId}/likeUp`, null, {
          params: {
            name: payload.contentName
          }
        })
        .then(res => {
          console.log("북마크 등록 성공");
          console.log(res.data);
          context.dispatch("AC_USER_LOAD_BOOKMARK");
        });
    },
    AC_REMOVE_BOOKMARAK: (context, payload) => {
      console.log("AC_REMOVE_BOOKMARAK !!!");
      console.log("in context ? :", context.dispatch);
      axios.post(`attraction/${payload.contentId}/likeDown`).then(res => {
        console.log("북마크 삭제 성공");
        console.log(res.data);
        context.dispatch("AC_USER_LOAD_BOOKMARK");
      });
    }
  }
};

export default userStore;
