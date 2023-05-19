<template>
  <div class="wrapper">
    <main class="login">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="submitForm" id="login">
            <div class="info">
              <h1>로그인</h1>
              <b-alert
                class="login_alert"
                :show="errorIdCheck || errorPwdCheck"
                variant="danger"
              >
                <a v-for="(error, index) in errors" :key="index">{{
                  error.context
                }}</a>
              </b-alert>
              <p>
                아이디<br /><b-form-input
                  type="text"
                  name="id"
                  :state="!errorIdCheck ? null : false"
                  v-model="id"
                  class="id"
                />
              </p>
              <p class="remain">
                <input
                  type="checkbox"
                  name="remainLogin"
                  id="remainLogin"
                  v-model="saveIdCheck"
                  @click="onClickSaveId"
                /><label for="remainLogin"> 아이디 저장</label>
              </p>
              <p>
                비밀번호<br /><b-form-input
                  type="password"
                  name="pwd"
                  :state="!errorPwdCheck ? null : false"
                  v-model="pwd"
                  class="pwd"
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
