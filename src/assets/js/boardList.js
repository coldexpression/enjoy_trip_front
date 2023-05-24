import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import router from "../../router";

const boardStore = "boardStore";
const userStore = "userStore";

export default {
  data() {
    return {
      title: "게시판 조회"
    };
  },
  computed: {
    ...mapGetters(boardStore, {
      storeBoardList: "GET_BOARD_LIST"
    }),
    ...mapGetters(userStore, {
      storeUserId: "GET_USER_ID"
    })
  },
  filters: {
    nFormatter
  },
  methods: {
    loadBoardList() {
      console.log(this);
      this.$store.dispatch(`${boardStore}/AC_BOARD_LIST_LOAD`);
    },
    move(num) {
      console.log(num);
    }
  },
  mounted() {
    console.log("list - mounted!!");
    this.loadBoardList();
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
  }
};
