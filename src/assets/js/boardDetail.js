import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import router from "../../router";

const boardStore = "boardStore";
const userStore = "userStore";

export default {
  data() {
    return {
      title: "게시판 리스트"
    };
  },
  computed: {
    ...mapGetters(boardStore, {
      storeBoard: "GET_BOARD_INFO"
    }),
    ...mapGetters(userStore, {
      storeUserId: "GET_USER_ID"
    })
  },
  filters: {
    nFormatter
  },
  methods: {
    loadBoard(num) {
      console.log(this);
      this.$store.dispatch(`${boardStore}/AC_BOARD_DETAIL_INFO_LOAD`, num);
    },
    move() {
      console.log("move 호출");
      this.$router.push({ name: "board" });
    },
    deleteboard(num) {
      console.log("delete 호출");
      console.log(num);
      this.$store.dispatch(`${boardStore}/AC_BOARD_DELETE`, num);
      this.$router.push({ name: "board" });
    }
  },
  mounted() {
    console.log("detail - mounted!!");
    console.log(this.$router);
    const num = router.history.current.params.num;
    this.loadBoard(num);
  }
};
