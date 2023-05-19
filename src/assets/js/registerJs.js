import router from "../../router";
import axios from "./axios";
import { mapGetters } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      registUser: {
        newId: "",
        newEmail: "",
        newPwd: "",
        newConfirmPwd: ""
      }
    };
  },
  computed: {
    ...mapGetters(userStore, {
      storeUserName: "GET_USER_NAME",
      storeUserEmail: "GET_USER_EMAIL",
      storeLoginState: "GET_LOGIN_STATE"
    })
  },
  methods: {
    submitForm() {
      console.log(this);
      console.log(this.registUser);
      this.$store.dispatch(`${userStore}/AC_USER_SIGNUP`, this.registUser);
    }
  }
};
