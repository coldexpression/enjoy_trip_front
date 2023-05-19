import Vue from "vue";
import Router from "vue-router";
import main from "@/components/main";
import Login from "@/components/user/login";
import Register from "@/components/user/register";
import MyPage from "@/components/user/myPage";
import Likepage from "@/components/user/likepage";
import AttractionDetail from "@/components/attraction/attractionDetail";
import store from "@/store/index";

Vue.use(Router);

const requireAuth = type => (to, from, next) => {
  const loginCheck = store.state.userStore.userInfo.isCheck;
  if (loginCheck) {
    console.log("로그인 정보 있음");
    if (type === "login" || type === "register") next("/");
    else next();
  } else {
    console.log("로그인 정보 없음");
    if (type === "myPage") next("/");
    else next();
  }
};

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: requireAuth("login")
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: requireAuth("register")
    },
    {
      path: "/myPage",
      name: "MyPage",
      component: MyPage,
      beforeEnter: requireAuth("myPage")
    },
    {
      path: "/attraction-detail/:contentId",
      name: "AttractionDetail",
      component: AttractionDetail
    },
    {
      path: "/likepage",
      name: "Likepage",
      component: Likepage,
      beforeEnter: requireAuth("likepage")
    }
  ]
});
