import router from "../../router";
import axios from "../js/axios";
export const loginFunc = {
  data: () => {
    return {
      id: "",
      pwd: "",
      loginCheck: false
    };
  },
  methods: {
    submitForm(event) {
      console.log(this);
      console.log(event.target.id.value);
      const target = event.target;
      var data = {
        id: this.id.value,
        pwd: this.pwd.value
      };
      axios
        .post("user/login", data)
        .then(response => {
          console.log("로그인 성공");
          console.log(response.data);
          sessionStorage.setItem("userInfo", response.data);
          console.log(this.$store);
          const resultUser = {
            userId: response.data.id,
            userEmail: response.data.email,
            isCheck: true
          };
          this.$store.commit("login", resultUser);
          router.push("/");
          console.log(this.$store.getters.getLoginState);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
