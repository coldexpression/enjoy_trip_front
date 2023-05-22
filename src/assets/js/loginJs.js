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
      saveIdCheck: false,
      errors: [],
      errorIdCheck: false,
      errorPwdCheck: false,
      errorLoginCheck: false
    };
  },
  created() {
    console.log("생성 완료!");
    this.initForm();
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
      this.errorLoginCheck = false;
    },
    pwd() {
      this.errors = [];
      this.errorPwdCheck = false;
      this.errorIdCheck = false;
      this.errorLoginCheck = false;
    }
  },
  methods: {
    onClickSaveId() {
      if (this.saveIdCheck) {
        localStorage.removeItem("savedId");
      } else {
        localStorage.setItem("savedId", this.id);
      }
    },
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
        this.$store
          .dispatch(`${userStore}/AC_USER_LOGIN`, event.target)
          .then(res => {
            console.log("결과 : ", res);

            if (!res) {
              this.errors.push({
                flag: "loginFail",
                context: "아이디 및 비밀번호가 일치하지 않습니다"
              });
              console.log("접근");
              this.errorLoginCheck = true;
              return;
            }
          });
      }
    },
    validPassword(password) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      return reg.test(password);
    },
    initForm() {
      console.log("initForm() 호출!");
      const savedId = localStorage.getItem("savedId");
      console.log(savedId);
      if (savedId) {
        this.saveIdCheck = true;
        this.id = savedId;
      } else {
        this.saveIdCheck = false;
      }
    }
  }
};
