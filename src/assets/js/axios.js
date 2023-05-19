import Axios from "axios";
import store from "@/store";
import VueCookies from "vue-cookies";
import router from "../../router";

const AxiosInst = Axios.create({
  baseURL: "http://localhost:9000/api"
});

AxiosInst.interceptors.request.use(
  config => {
    // console.log(userStore.state);
    const token = VueCookies.get("accessToken");
    config.headers["Access-Control-Allow-Origin"] = "*"; // CORS 설정(모든 리소스 허용)
    config.headers["Authorization"] = token;
    return config;
  },
  error => {
    console.log("axios request error : ", error);
  }
);

AxiosInst.interceptors.response.use(
  res => {
    console.log("인터셉터 : ", res);
    return res;
  },
  error => {
    console.log(" 에러입니다 : ", error.response.status);
    if (error.response.status === 401) {
      // console.log(userStore);
      // console.log(userStore.actions.AC_USER_LOGOUT());
      // userStore.actions.AC_USER_LOGOUT();
      store.dispatch("userStore/AC_USER_LOGOUT");
      alert("토큰이 만료되었습니다.");
      router.push("/login");
    }

    return Promise.reject(error);
  }
);

export default AxiosInst;
