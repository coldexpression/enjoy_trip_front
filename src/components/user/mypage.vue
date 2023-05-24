<template>
  <main class="userInfo">
    <div class="content">
      <section class="section">
        <form v-on:submit.prevent="submitEdit" method="post">
          <div class="info">
            <h1>마이페이지</h1>
            <b-alert
              class="login_alert"
              :show="
                errorPwdCheck ||
                  errorNewPwdCheck ||
                  errorNewPwdConfirmCheck ||
                  errorNotSameAsNewPwd ||
                  errorNotMatchPwd
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
                name="id"
                v-model="storeUserId"
                class="id"
                disabled
              />
            </p>
            <p>
              이메일<br /><b-form-input
                type="text"
                name="email"
                v-model="storeUserEmail"
                class="email"
                disabled
              />
            </p>

            <h2>비밀번호 변경하기</h2>
            <p>
              기존 비밀번호<br /><b-form-input
                type="password"
                name="pwd"
                v-model="pwd"
                :state="!errorPwdCheck ? null : false"
                class="pwd"
              />
            </p>
            <p>
              비밀번호<br /><b-form-input
                type="password"
                name="newPwd"
                v-model="newPwd"
                :state="!errorNewPwdCheck ? null : false"
                class="newPwd"
              />
            </p>
            <p>
              비밀번호 확인<br /><b-form-input
                type="password"
                name="newPwdConfirm"
                v-model="newPwdConfirm"
                :state="!errorNewPwdConfirmCheck ? null : false"
                class="newPwdConfirm"
              />
            </p>
            <input type="submit" class="submit" value="회원정보수정" />
            <button class="delete_btn" @click.prevent="sumbitDelete">
              회원 탈퇴
            </button>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import myPage from "@/assets/js/myPageJs";
export default myPage;
</script>

<style scoped>
@import "../../assets/css/user.css";
</style>
