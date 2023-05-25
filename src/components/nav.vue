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
            <li></li>
          </ul>
          <ul class="login_menu">
            <div v-if="storeLoginState">
              <li>
                <router-link to="/mypage"> &#128587; 마이페이지</router-link>
              </li>
              <li>
                <router-link to="/likepage">&#128147; 찜한 곳</router-link>
              </li>
              <li>
                <a href="#" v-on:click="userLogout">&#128682; 로그아웃</a>
              </li>
            </div>
            <div v-else>
              <li>
                <router-link to="/login">&#128747; 로그인</router-link>
              </li>
              <li>
                <router-link to="/register">&#128583; 회원가입</router-link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <nav>
        <ul class="user_menu">
          <li
            v-for="(item, index) in imges"
            :key="index"
            class="user_menu_item"
          >
            <a v-if="item.site === 'out'" :href="item.url" target="_blank">
              <img
                :src="item.img"
                alt="logo"
                class="nav_icon"
                width="20"
                height="20"
              />
              {{ item.title }}
            </a>
            <router-link v-else :to="{ name: item.url }">
              <img
                :src="item.img"
                alt="logo"
                class="nav_icon"
                width="20"
                height="20"
              />
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <hr />
  </div>
</template>

<!-- <style lang="scss">
@import "../assets/css/include.css";
</style> -->

<script>
import initState from "@/assets/js/navJs";
console.log(initState);
export default initState;
</script>

<style scoped>
@import "../assets/css/include.css";
</style>
