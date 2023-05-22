<template>
  <div class="wrapper">
    <main class="signin">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="submitForm" id="signin">
            <div class="info">
              <h1>회원가입</h1>
              <b-alert
                class="regist_alert"
                :show="
                  errorIdCheck ||
                    errorPwdCheck ||
                    errorConfirmPwdCheck ||
                    errorEmailCheck ||
                    errorValidPwdCheck ||
                    errorNoSameAsPwdCheck ||
                    errorRegistCheck
                "
                variant="danger"
              >
                <a v-for="(error, index) in errors" :key="index">{{
                  error.context
                }}</a>
              </b-alert>
              <p>
                아이디<br /><b-form-input
                  type="text"
                  name="newId"
                  :state="!errorIdCheck ? null : false"
                  v-model="newId"
                  class="newId"
                />
              </p>
              <p>
                이메일<br /><b-form-input
                  type="email"
                  name="newEmail"
                  :state="!errorEmailCheck ? null : false"
                  v-model="newEmail"
                  class="newEmail"
                />
              </p>
              <p>
                비밀번호<br /><b-form-input
                  type="password"
                  name="newPwd"
                  :state="!errorPwdCheck ? null : false"
                  v-model="newPwd"
                  class="newPwd"
                />
              </p>
              <p>
                비밀번호 확인<br /><b-form-input
                  type="password"
                  name="newConfirmPwd"
                  :state="!errorConfirmPwdCheck ? null : false"
                  v-model="newConfirmPwd"
                  class="newConfirmPwd"
                />
              </p>
              <input type="submit" class="submit" value="회원가입" />
            </div>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import registerFunc from "@/assets/js/registerJs";
console.log(registerFunc);
export default registerFunc;
</script>
<style scoped>
@import "../../assets/css/user.css";
</style>
