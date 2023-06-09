import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import router from "../../router";

const attractionStore = "attractionStore";
const userStore = "userStore";

export default {
  data() {
    return {
      title: "",
      currentPage: 0,
      perPage: 10
    };
  },
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
    ...mapGetters(attractionStore, {
      storeAttractionTitle: "GET_ATTRACTION_TITLE"
    }),
    ...mapGetters(attractionStore, {
      storeAttractionListCount: "GET_ATTRACTION_LIST_COUNT"
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
      var payload = {
        contentId: contentId,
        contentName: ""
      };
      //버튼의 상태에 따라서 다른 메소드 실행
      if (marked) {
        console.log("북마크에서 삭제");
        this.$store.dispatch(`${userStore}/AC_REMOVE_BOOKMARAK`, payload);
      } else {
        console.log("북마크에 추가");
        payload.contentName = prompt("저장할 이름");
        console.log("입력된 정보 :");
        if (payload.contentName == "" || payload.contentName == null) {
          alert("이름이 입력되지 않았습니다. 북마크로 저장하지 않습니다");
          return;
        }
        console.log(payload);
        this.$store.dispatch(`${userStore}/AC_REGIST_BOOKMARK`, payload);
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
    loadAttractionList() {
      const sidoCode = router.history.current.params.sidoCode;
      const payload = {
        sidoCode: sidoCode,
        currentPage: this.currentPage,
        perPage: this.perPage
      };
      console.log("sidoCode Params: " + payload);
      this.$store.dispatch(
        `${attractionStore}/AC_ATTRACTION_LIST_LOAD`,
        payload
      );
    },
    loadAttractionBookMark(userId) {
      this.$store.dispatch(`${userStore}/AC_USER_LOAD_BOOKMARK`, userId);
    },
    loadStore() {
      //코드실행후 배열 갱신
      console.log("배열 갱신!");
      const sidoCode = router.history.current.params.sidoCode;
      const payload = {
        sidoCode: sidoCode,
        currentPage: this.currentPage,
        perPage: this.perPage
      };
      console.log("sidoCode Params: " + payload);
      this.loadAttractionList();
    },
    pageClick(button, page) {
      console.log("버튼 클릭 ! : ", button);
      console.log("버튼 클릭2 :: ", page);
      this.currentPage = page;
      this.loadAttractionList();
    }
  },
  mounted() {
    console.log("list - mounted!!");
    const sidoCode = router.history.current.params.sidoCode;
    const attractonTitle = router.history.current.params.cityName;
    console.log(router.history.current.params);
    const payload = {
      sidoCode: sidoCode,
      currentPage: this.currentPage,
      perPage: this.perPage
    };
    console.log("sidoCode Params: ", payload);
    this.loadAttractionList();
    if (attractonTitle) {
      this.$store.dispatch(
        `${attractionStore}/AC_ATTRACTION_TITLE_LOAD`,
        attractonTitle
      );
    }
  }
};
