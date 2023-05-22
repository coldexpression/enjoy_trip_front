import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import { bookmarkDelete } from "./bookmark";

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
    delete(contentId) {
      console.log("데이터 삭제");
      bookmarkDelete(contentId);
      router.push("/likepage");
    },
    loadAttractionBookMark(userId) {
      this.$store.dispatch(`${userStore}/AC_USER_LOAD_BOOKMARK`, userId);
    }
  },
  mounted() {
    console.log("Bookmark - mounted!!");
    const userId = this.storeUserId;
    console.log("마운트 후 아이디 : ", userId);
    this.loadAttractionBookMark(userId);
  }
};