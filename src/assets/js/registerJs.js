import router from "../../router";
import axios from "./axios";
import { mapGetters } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      newId: "",
      newEmail: "",
      newPwd: "",
      newConfirmPwd: "",
      errors: [],
      errorIdCheck: false,
      errorEmailCheck: false,
      errorPwdCheck: false,
      errorConfirmPwdCheck: false,
      errorValidPwdCheck: false,
      errorNoSameAsPwdCheck: false,
      errorRegistCheck: false
    };
  },
  computed: {
    ...mapGetters(userStore, {
      storeUserName: "GET_USER_NAME",
      storeUserEmail: "GET_USER_EMAIL",
      storeLoginState: "GET_LOGIN_STATE"
    })
  },
  watch: {
    newId() {
      this.initErrorForm();
    },
    newEmail() {
      this.initErrorForm();
    },
    newPwd() {
      this.initErrorForm();
    },
    newConfirmPwd() {
      this.initErrorForm();
    }
  },
  methods: {
    submitForm() {
      console.log(this);
      this.errors = [];
      if (!this.newId) {
        this.errorIdCheck = true;
        this.errors.push({ flag: "id", context: "아이디를 입력해 주세요" });
        return;
      }

      if (!this.newEmail) {
        this.errorEmailCheck = true;
        this.errors.push({ flag: "email", context: "이메일을 입력해 주세요" });
        return;
      }

      if (!this.newPwd) {
        this.errorPwdCheck = true;
        this.errors.push({ flag: "pwd", context: "비밀번호를 입력해 주세요" });
        return;
      }

      if (!this.newConfirmPwd) {
        this.errorConfirmPwdCheck = true;
        this.errors.push({
          flag: "confirmPwd",
          context: "비밀번호를 입력해 주세요"
        });
        return;
      }

      console.log(this.newPwd);
      console.log(this.newConfirmPwd);

      console.log(this.newPwd !== this.newConfirmPwd);

      if (this.newPwd !== this.newConfirmPwd) {
        this.errorNoSameAsPwdCheck = true;
        this.errors.push({
          flag: "pwd",
          context: "비밀번호가 일치하지 않습니다"
        });
        return;
      }

      if (!this.validPassword(this.newPwd)) {
        this.errorValidPwdCheck = true;
        this.errors.push({
          flag: "pwd",
          context: "비밀번호는 영문 + 숫자 8자리 이상 입력해 주세요"
        });
        return;
      }

      this.$store.dispatch(`${userStore}/AC_USER_SIGNUP`, this).then(res => {
        console.log("회원가입 결과 : ", res);
        const check = res;

        if (!check) {
          this.errorRegistCheck = true;
          this.errors.push({
            flag: "registFail",
            context: "이미 존재하는 아이디 입니다"
          });
          console.log("이미 존재함");
          return;
        }
      });
    },
    initErrorForm() {
      this.errors = [];
      this.errorIdCheck = false;
      this.errorEmailCheck = false;
      this.errorPwdCheck = false;
      this.errorValidPwdCheck = false;
      this.errorNoSameAsPwdCheck = false;
      this.errorConfirmPwdCheck = false;
      this.errorRegistCheck = false;
    },
    validPassword(password) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      return reg.test(password);
    }
  }
};
