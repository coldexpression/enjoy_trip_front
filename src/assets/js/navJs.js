import { mapGetters } from "vuex";

const userStore = "userStore";

const data = {
  imges: [
    {
      img: require("@/assets/img/airplane.png"),
      url: "https://flight.naver.com/",
      title: "항공권"
    },
    {
      img: require("@/assets/img/loading.png"),
      url: "https://hotels.naver.com/",
      title: "숙소"
    },
    {
      img: require("@/assets/img/tour.png"),
      url: "https://pkgtour.naver.com/",
      title: "티켓 패키지 투어"
    },
    {
      img: require("@/assets/img/rentcar.png"),
      url: "https://www.skyscanner.co.kr/car-hire",
      title: "국내 렌터카"
    },
    {
      img: require("@/assets/img/roulette.png"),
      url: "https://travel.naver.com/domestic",
      title: "국내여행 정보"
    },
    {
      img: require("@/assets/img/package.png"),
      url: "https://travel.naver.com/overseas",
      title: "해외 여행 정보"
    },
    {
      img: require("@/assets/img/ai.png"),
      url: "https://travel.naver.com/my/plans",
      title: "여행 계획 만들기"
    },
    {
      img: require("@/assets/img/hotel.png"),
      url: "https://hotels.naver.com/",
      title: "호텔 특가"
    },
    {
      img: require("@/assets/img/insurance.png"),
      url: "https://www.travelover.co.kr/",
      title: "여행자 보험"
    }
  ]
};

export default {
  data() {
    return data;
  },
  computed: {
    ...mapGetters(userStore, {
      storeLoginState: "GET_LOGIN_STATE"
    })
  },
  watch: {},
  methods: {
    userLogout() {
      this.$store.dispatch(`${userStore}/AC_USER_LOGOUT`);
    }
  }
};
