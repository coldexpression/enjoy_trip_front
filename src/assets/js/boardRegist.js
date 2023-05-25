import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import router from "../../router";
import axios from "./axios";

const boardStore = "boardStore";
const userStore = "userStore";

export default {
  data() {
    return {
      board: {
        title: "",
        content: ""
      }
    };
  },
  computed: {
    ...mapGetters(userStore, {
      storeUserId: "GET_USER_ID"
    })
  },
  filters: {
    nFormatter
  },
  methods: {
    boardRegist() {
      const url = "http://localhost:9000/api/board/regist";
      axios
        .post(url, this.board)
        .then(() => {
          alert("등록성공");
          this.$router.push({ name: "board" });
        })
        .catch(err => {
          console.log(err);
          alert("등록 실패");
        });
    }
  }
};
