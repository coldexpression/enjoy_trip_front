import { mapGetters } from "vuex";
import router from "../../router";

const attractionStore = "attractionStore";
const userStore = "userStore";

export default {
  data() {
    return {
      map: null,
      bookMarkCheck: false
    };
  },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionDetailInfo: "GET_ATTRACTION_DETAIL_INFO"
    }),
    ...mapGetters(userStore, {
      storeBookMarkInfo: "GET_USER_BOOKMARK"
    }),
    ...mapGetters(userStore, {
      storeLoginState: "GET_LOGIN_STATE"
    }),
    bookmarks() {
      return this.storeBookMarkInfo.map(bookmark => {
        return parseInt(bookmark.contentId);
      });
    }
  },
  watch: {},
  methods: {
    loadAttractionDetailInfo(contentId) {
      this.$store.dispatch(
        `${attractionStore}/AC_ATTRACTION_DETAIL_INFO_LOAD`,
        contentId
      );
    },
    loadScript() {
      console.log("loadScript!!");
      const script = document.createElement("script");
      script.id = "kakaoSrc";
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=1f0bd0eb7936d4685aa5dc4134216827&autoload=false";
      script.onload = () => kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    loadMap() {
      console.log("loadMap!!");
      console.log("정보 : ", this.storeAttractionDetailInfo);
      const latitude = this.storeAttractionDetailInfo.latitude;
      const longitude = this.storeAttractionDetailInfo.longitude;
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3
      };
      this.map = new kakao.maps.Map(container, options);
      //   this.loadMaker();
    },
    loadMaker() {
      const latitude = this.storeAttractionDetailInfo.latitude;
      const longitude = this.storeAttractionDetailInfo.longitude;
      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });

      marker.setMap(this.map);
    },
    setMapCenter() {
      const latitude = this.storeAttractionDetailInfo.latitude;
      const longitude = this.storeAttractionDetailInfo.longitude;
      const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
      console.log(this.map);
      this.map.setCenter(moveLatLon);
      this.loadMaker();
    },
    clickLike(flag) {
      const contentId = this.storeAttractionDetailInfo.contentId;
      var payload = {
        contentId: contentId,
        contentName: ""
      };
      //버튼의 상태에 따라서 다른 메소드 실행
      if (flag) {
        console.log("북마크에서 삭제");
        this.$store.dispatch(`${userStore}/AC_REMOVE_BOOKMARAK`, payload);
      } else {
        console.log("북마크에 추가");
        payload.contentName = prompt("저장할 이름");
        if (payload.contentName == "" || payload.contentName == null) {
          alert("이름이 입력되지 않았습니다. 북마크로 저장하지 않습니다");
          return;
        }
        console.log("입력된 정보 :");
        console.log(payload);
        this.$store.dispatch(`${userStore}/AC_REGIST_BOOKMARK`, payload);
      }
    }
  },
  created() {
    console.log("created!!");
    console.log("북마크 정보 : ", this.storeBookMarkInfo);
    const contentId = router.history.current.params.contentId;
    this.bookMarkCheck =
      this.storeBookMarkInfo.filter(data => data.contentId === contentId)
        .length === 1;
    console.log(this.bookMarkCheck);
  },
  beforeUpdate() {
    console.log("beforeUpdate !!");
    console.log("변화 감지 :", this.storeAttractionDetailInfo);
    console.log(this.map);
    if (this.map) {
      this.setMapCenter();
    }
  },
  mounted() {
    console.log("mounted!!");
    console.log(router);
    const contextId = router.history.current.params.contentId;
    this.loadAttractionDetailInfo(contextId);

    // 카카오 지도 호출
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
      //   console.log("window.kakao : ", window.kakao);
      //   console.log("window.kakao.maps : ", window.kakao.maps);
      //   this.setMapCenter();
    } else {
      this.loadScript();
      //   console.log("이미 로딩됨 ");
    }
  },
  destroyed() {}
};
