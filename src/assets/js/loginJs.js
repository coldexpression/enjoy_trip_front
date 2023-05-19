import router from "../../router";
import axios from "../js/axios";
import { mapGetters } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      id: "",
      pwd: "",
      loginCheck: false,
      errors: [],
      errorIdCheck: false,
      errorPwdCheck: false
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
    id() {
      this.errors = [];
      this.errorPwdCheck = false;
      this.errorIdCheck = false;
    },
    pwd() {
      this.errors = [];
      this.errorPwdCheck = false;
      this.errorIdCheck = false;
    }
  },
  methods: {
    submitForm(event) {
      this.errors = [];
      if (!this.id) {
        this.errors.push({ flag: "id", context: "아이디를 입력해 주세요" });
        this.errorIdCheck = true;
        return;
      }

      if (!this.pwd) {
        this.errors.push({ flag: "pwd", context: "비밀번호를 입력해 주세요" });
        this.errorPwdCheck = true;
        return;
      }

      if (!this.validPassword(this.pwd)) {
        this.errors.push({
          flag: "pwd",
          context: "비밀번호는 영문 + 숫자 8자리 이상 입력해 주세요"
        });
        this.errorPwdCheck = true;
        return;
      }

      if (this.errors.length == 0) {
        this.$store.dispatch(`${userStore}/AC_USER_LOGIN`, event.target);
      }
    },
    validPassword(password) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      return reg.test(password);
    }
  }
};
