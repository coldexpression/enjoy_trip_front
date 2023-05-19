import { mapGetters } from "vuex";
import { nFormatter } from "./filters";

const userStore = "userStore";

export default {
  // data() {},
  computed: {
    ...mapGetters(userStore, {
      storeLoginState: "GET_LOGIN_STATE"
    }),
    ...mapGetters(userStore, {
      storeUserId: "GET_USER_ID"
    }),
    ...mapGetters(userStore, {
      storeBookMarkInfo: "GET_USER_BOOKMARK"
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
