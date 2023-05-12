<template>
  <div>
    <main class="login">
      <div class="content">
        <h1>로그인</h1>
        <section class="section">
          <form v-on:submit.prevent="submitForm" id="login">
            <div class="info">
              <p>
                <input type="hidden" name="action" value="login" />
              </p>
              <p>
                아이디<br /><input
                  type="text"
                  name="id"
                  autofocus
                  placeholder=" 아이디를 입력하시오"
                  v-model="id"
                />
              </p>
              <p>
                비밀번호<br /><input
                  type="password"
                  name="pwd"
                  placeholder=" 비밀번호"
                  v-model="pwd"
                />
              </p>
            </div>
            <div class="option">
              <p>
                <input
                  type="checkbox"
                  name="remainLogin"
                  id="remainLogin"
                /><label for="remainLogin"> 아이디 기억하기</label>
              </p>
              <router-link to="/register">
                <a href=""> 아직 회원이 아니신가요?</a>
              </router-link>
              <router-link to="/register">
                <a href="">이메일로 회원가입 </a>
              </router-link>
            </div>
            <input type="submit" class="submit" value="로그인" />
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import loginFunc from "@/assets/js/loginJs";
console.log(loginFunc);
export default loginFunc;
</script>

<style scoped>
@import "../../assets/css/user.css";
</style>
