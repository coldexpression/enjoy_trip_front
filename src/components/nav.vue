<template>
  <div>
    <header>
      <nav>
        <div class="first_header">
          <ul class="logo_menu">
            <li>
              <router-link to="/">
                <img
                  src="../logo.png"
                  alt="logo"
                  class="logo_img"
                  width="120"
                />
              </router-link>
            </li>
            <li>
              <div class="search">
                <input
                  type="text"
                  placeholder="관광지를 검색해보세요"
                  style="background-color: rgb(236, 236, 236)"
                />
                <img
                  id="search_img"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                />
              </div>
            </li>
          </ul>
          <ul class="login_menu">
            <li>
              <router-link to="/login">로그인</router-link>
            </li>
            <li>
              <router-link to="/register">회원가입</router-link>
            </li>
            <li>
              <router-link to="/mypage">마이페이지</router-link>
            </li>
            <li>
              <a href="#">로그아웃</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <ul class="user_menu">
          <li v-for="(item, index) in obj" :key="index" class="user_menu_item">
            <a href="#">
              <img
                :src="item.img"
                alt="logo"
                class="nav_icon"
                width="20"
                height="20"
              />
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<!-- <style lang="scss">
@import "../assets/css/include.css";
</style> -->

<script>
import { navJs } from "@/assets/js/navJs";

export default navJs;
</script>
