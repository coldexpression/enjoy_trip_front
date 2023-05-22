import { mapGetters } from "vuex";
import axios from "./axios";
const userStore = "userStore";

const data = {
  pwd: "",
  newPwd: "",
  newPwdConfirm: "",
  errorPwdCheck: false,
  errorNewPwdCheck: false,
  errorNewPwdConfirmCheck: false,
  errorNotSameAsNewPwd: false,
  errors: []
};
export default {
  data() {
    return data;
  },
  computed: {
    ...mapGetters(userStore, {
      storeLoginState: "GET_LOGIN_STATE",
      storeUserId: "GET_USER_ID",
      storeUserEmail: "GET_USER_EMAIL"
    })
  },
  watch: {
    pwd() {
      this.errorInit();
    },
    newPwd() {
      this.errorInit();
    },
    newPwdConfirm() {
      this.errorInit();
    }
  },
  methods: {
    submitEdit() {
      console.log("수정 버튼 클릭");
      console.log(this);

      this.errors = [];
      if (!this.pwd) {
        this.errors.push({
          flag: "pwd",
          context: "기존 비밀번호를 입력해 주세요"
        });
        this.errorPwdCheck = true;
        return;
      }

      if (!this.newPwd) {
        this.errors.push({
          flag: "newPwd",
          context: "새 비밀번호를 입력해 주세요"
        });
        this.errorNewPwdCheck = true;
        return;
      }

      console.log(this.newPwd);
      console.log(this.newPwdConfirm);
      console.log(this.newPwd !== this.newPwdConfirm);

      if (!this.validPassword(this.newPwd)) {
        console.log("접근합니다까?");
        this.errors.push({
          flag: "newPwd",
          context: "비밀번호는 영문 + 숫자 8자리 이상 입력해 주세요"
        });
        this.errorNewPwdCheck = true;
        return;
      }

      if (!this.newPwdConfirm) {
        this.errors.push({
          flag: "newConfirmPwd",
          context: "새 비밀번호 확인 를 입력해 주세요"
        });
        this.errorNewPwdConfirmCheck = true;
        return;
      }

      if (this.newPwd !== this.newPwdConfirm) {
        this.errors.push({
          flag: "newPwd",
          context: "새 비밀번호가 일치하지 않습니다."
        });
        this.errorNotSameAsNewPwd = true;
        return;
      }

      const editUserInfo = {
        id: this.storeUserId,
        pwd: this.pwd,
        newPwd: this.newPwd,
        email: this.storeUserEmail
      };
      this.$store.dispatch(`${userStore}/AC_USER_EDIT`, editUserInfo);
    },
    sumbitDelete() {
      this.errors = [];

      if (!this.pwd) {
        this.errors.push({
          flag: "pwd",
          context: "기존 비밀번호를 입력해 주세요"
        });
        this.errorPwdCheck = true;
        return;
      }

      const deleteUserInfo = {
        id: this.storeUserId,
        pwd: this.pwd
      };

      this.$store.dispatch(`${userStore}/AC_USER_DELETE`, deleteUserInfo);
    },
    errorInit() {
      console.log("초기화!!");
      this.errors = [];
      this.errorPwdCheck = false;
      this.errorNewPwdCheck = false;
      this.errorNewPwdConfirmCheck = false;
      this.errorNotSameAsNewPwd = false;
    },
    validPassword(password) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      return reg.test(password);
    }
  },
  destroyed() {
    console.log("det : ", this);
    this.pwd = "";
    this.newPwd = "";
    this.newPwdConfirm = "";
    this.errorInit();
  }
};
