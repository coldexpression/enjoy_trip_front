<template>
  <div class="wrapper">
    <main class="signin">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="submitForm" id="signin">
            <div class="info">
              <h1>회원가입</h1>
              <input type="hidden" name="action" value="signin" />
              <p>
                아이디<br /><input
                  type="text"
                  name="newId"
                  id="newId"
                  v-model="registUser.newId"
                  autofocus
                  placeholder=" 아이디를 입력하시오"
                />
              </p>
              <p>
                이메일<br /><input
                  type="email"
                  name="newEmail;"
                  id="newEmail"
                  v-model="registUser.newEmail"
                  placeholder=" 이메일"
                />
              </p>
              <p>
                비밀번호<br /><input
                  type="password"
                  name="newPwd"
                  id="newPwd"
                  v-model="registUser.newPwd"
                  placeholder=" 비밀번호"
                />
              </p>
              <p>
                비밀번호 확인<br /><input
                  type="password"
                  name="newConfirmPwd"
                  id="newConfirmPwd"
                  v-model="registUser.newConfirmPwd"
                  placeholder=" 비밀번호 확인"
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
