import { mapGetters } from "vuex";
import axios from "./axios";
const userStore = "userStore";

export default {
  data() {
    return {
      title: "",
      FavoriteList: []
    };
  },
  created() {
    axios
      .get("http://localhost:9000/api/attraction/userFavorite", {
        params: {
          userId: this.storeUserId
        }
      })
      .then(res => {
        // console.log(res);
        console.log(this.storeUserId);
        console.log("res.data");
        console.log(res.data);
        this.FavoriteList = res.data;
        this.title = this.storeUserId;
      });
  },
  computed: {
    ...mapGetters(userStore, {
      storeLoginState: "GET_LOGIN_STATE",
      storeUserId: "GET_USER_ID",
      storeUserEmail: "GET_USER_EMAIL"
    })
  }
};
