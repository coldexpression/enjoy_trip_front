import { mapGetters } from "vuex";
import axios from "./axios";
const userStore = "userStore";

const data = {
  pwd: "",
  newPwd: "",
  newPwdConfirm: ""
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
  watch: {},
  methods: {
    submitEdit: function() {
      console.log("수정 버튼 클릭");
      console.log(this);
      const editUserInfo = {
        id: this.storeUserId,
        pwd: this.pwd,
        newPwd: this.newPwd,
        email: this.storeUserEmail
      };
      this.$store.dispatch(`${userStore}/AC_USER_EDIT`, editUserInfo);
    }
  },
  destroyed() {
    console.log("det : ", this);
    this.pwd = "";
    this.newPwd = "";
    this.newPwdConfirm = "";
  }
};
