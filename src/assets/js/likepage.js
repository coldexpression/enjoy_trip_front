import { mapGetters } from "vuex";
import axios from "../js/axios";
import { nFormatter } from "./filters";
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
      .get("attraction/userFavorite", {
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
  },
  filters: {
    nFormatter
  },
  methods: {
    log() {
      console.log(
        "하트 클릭함 -> 찜한 목록에서 지우게 하는 메소드 추가 /원한다면 새로고침까지"
      );
    }
  }
};
