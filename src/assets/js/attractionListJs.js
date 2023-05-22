import { mapGetters } from "vuex";
import { nFormatter } from "./filters";
import { bookmarkInsert, bookmarkDelete } from "./bookmark";
import router from "../../router";

const attractionStore = "attractionStore";
const userStore = "userStore";

export default {
  data() {
    return {
      title: "목록 조회"
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
    bookmarks() {
      return this.storeBookMarkInfo.map(bookmark => {
        return parseInt(bookmark.contentId);
      });
    }
  },
  filters: {
    nFormatter
  },
  methods: {
    bookmarkClick(contentId) {
      console.log("하트 클릭함");
      //만약 로그인이 안 되어있는 상태라면 로그인페이지로 이동
      if (this.storeUserId === "") {
        alert("회원가입을 하셔야 북마크를 하실 수 있습니다.");
        router.push("/login");
        return;
      }
      //버튼의 상태에 따라서 다른 메소드 실행
      if (this.bookmarks.includes(parseInt(contentId))) {
        console.log("북마크에서 삭제");
        bookmarkDelete(contentId, this.storeUserId);
      } else {
        console.log("북마크에 추가");
        var name = prompt("저장할 이름");
        console.log("입력된 이름 :" + name);
        bookmarkInsert(contentId, this.storeUserId, name);
      }
      //코드실행후 북마크 배열 갱신
      console.log("북마크 배열 갱신!");
      this.loadAttractionBookMark();
    },
    loadAttractionList() {
      this.$store.dispatch(`${attractionStore}/AC_ATTRACTION_LIST_LOAD`);
    },
    loadAttractionBookMark(userId) {
      this.$store.dispatch(`${userStore}/AC_USER_LOAD_BOOKMARK`, userId);
    }
  },
  mounted() {
    console.log("list - mounted!!");
    this.loadAttractionList();
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
  }
};
