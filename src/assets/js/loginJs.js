import router from "../../router";
import axios from "../js/axios";
import { mapGetters } from "vuex";

const userStore = "userStore";

export default {
  data: () => {
    return {
      id: "",
      pwd: "",
      loginCheck: false
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
    submitForm(event) {
      console.log(this);
      console.log(event.target.id.value);
      this.$store.dispatch(`${userStore}/AC_USER_LOGIN`, event.target);
    }
  }
};
