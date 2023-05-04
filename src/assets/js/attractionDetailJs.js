import { mapGetters } from "vuex";
import router from "../../router";

const attractionStore = "attractionStore";

export default {
  data() {
    return {
      map: null
    };
  },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionDetailInfo: "GET_ATTRACTION_DETAIL_INFO"
    })
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
    }
  },
  created() {
    console.log("created!!");
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
