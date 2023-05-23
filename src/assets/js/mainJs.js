import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const attractionStore = "attractionStore";
const userStore = "userStore";

export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      mainImg: [
        {
          cityName: "서울",
          sidoCode: 1,
          url: require("../../assets/img/seoul.png")
        },
        {
          cityName: "부산",
          sidoCode: 6,
          url: require("../../assets/img/busan.png")
        },
        {
          cityName: "제주",
          sidoCode: 39,
          url: require("../../assets/img/jeju.png")
        },
        {
          cityName: "강원도",
          sidoCode: 32,
          url: require("../../assets/img/gangwondo.png")
        },
        {
          cityName: "대구",
          sidoCode: 4,
          url: require("../../assets/img/daegu.png")
        },
        {
          cityName: "대전",
          sidoCode: 3,
          url: require("../../assets/img/daejeon.png")
        },
        {
          cityName: "경상북도",
          sidoCode: 35,
          url: require("../../assets/img/gyeongju.png")
        },
        {
          cityName: "광주",
          sidoCode: 5,
          url: require("../../assets/img/gwangju.png")
        }
      ]
    };
  },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionTopInfo: "GET_TOP_INFO"
    }),
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
  watch: {},
  methods: {
    loadAttractionTopInfo() {
      this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
    },
    loadAttractionBookMark(userId) {
      this.$store.dispatch(`${userStore}/AC_USER_LOAD_BOOKMARK`, userId);
    }
  },
  mounted() {
    console.log("Main - mounted!!");
    this.loadAttractionTopInfo();
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);

    if (this.storeLoginState) {
      const userId = this.storeUserId;
      console.log("마운트 후 아이디 : ", userId);
      this.loadAttractionBookMark(userId);
    }
  }
};
