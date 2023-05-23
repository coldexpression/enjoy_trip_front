import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import router from "../../router";

const attractionStore = "attractionStore";
const userStore = "userStore";

export default {
  //   data() {
  //     return {
  //       title: router.history.current.params.cityName
  //     };
  //   },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionList: "GET_ATTRACTION_LIST"
    }),
    ...mapGetters(userStore, {
      storeBookMarkInfo: "GET_USER_BOOKMARK"
    }),
    ...mapGetters(userStore, {
      storeUserId: "GET_USER_ID"
    }),
    bookmarks() {
      return this.storeBookMarkInfo.map(bookmark => {
        return parseInt(bookmark.contentId);
      });
    },
    cityName() {
      return router.history.current.params.cityName;
    }
  },
  watch: {
    bookmarks() {
      console.log("배열 갱신!");
      const sidoCode = router.history.current.params.sidoCode;
      this.loadAttractionList(sidoCode);
    }
  },
  filters: {
    nFormatter
  },
  methods: {
    bookmark(contentId, marked) {
      //버튼의 상태에 따라서 다른 메소드 실행
      if (marked) {
        console.log("북마크에서 삭제");
        this.$store.dispatch(`${userStore}/AC_REMOVE_BOOKMARAK`, contentId);
      } else {
        console.log("북마크에 추가");
        var name = prompt("저장할 이름");
        console.log("입력된 이름 :" + name);
        console.log(this);
        this.$store.dispatch(`${userStore}/AC_REGIST_BOOKMARK`, contentId);
      }
    },

    bookmarkClick(contentId) {
      console.log("하트 클릭함");
      //만약 로그인이 안 되어있는 상태라면 로그인페이지로 이동
      if (this.storeUserId === "") {
        alert("회원가입을 하셔야 북마크를 하실 수 있습니다.");
        router.push("/login");
        return;
      }
      this.bookmark(contentId, this.bookmarks.includes(parseInt(contentId)));
    },
    loadAttractionList(sidoCode) {
      this.$store.dispatch(
        `${attractionStore}/AC_ATTRACTION_LIST_LOAD`,
        sidoCode
      );
    },
    loadAttractionBookMark(userId) {
      this.$store.dispatch(`${userStore}/AC_USER_LOAD_BOOKMARK`, userId);
    },
    loadStore() {
      //코드실행후 배열 갱신
      console.log("배열 갱신!");
      const sidoCode = router.history.current.params.sidoCode;
      console.log("sidoCode Params: " + sidoCode);
      this.loadAttractionList(sidoCode);
    }
  },
  mounted() {
    console.log("list - mounted!!");
    const sidoCode = router.history.current.params.sidoCode;
    console.log("sidoCode Params: " + sidoCode);
    this.loadAttractionList(sidoCode);
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
  }
};
