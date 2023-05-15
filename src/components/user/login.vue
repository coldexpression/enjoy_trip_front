<template>
  <div class="wrapper">
    <main class="login">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="submitForm" id="login">
            <div class="info">
              <h1>로그인</h1>
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
              <p class="remain">
                <input
                  type="checkbox"
                  name="remainLogin"
                  id="remainLogin"
                /><label for="remainLogin"> 아이디 저장</label>
              </p>
              <p>
                비밀번호<br /><input
                  type="password"
                  name="pwd"
                  placeholder=" 비밀번호"
                  v-model="pwd"
                />
              </p>
              <input type="submit" class="submit" value="로그인" />
              <button @click="$router.push('/register')" class="regist_btn">
                회원 가입
              </button>
            </div>
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
