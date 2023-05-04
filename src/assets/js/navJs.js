import { mapGetters } from "vuex";

const userStore = "userStore";

const data = {
  imges: [
    {
      img: require("@/assets/img/airplane.png"),
      title: "항공권"
    },
    {
      img: require("@/assets/img/loading.png"),
      tilte: "숙소"
    },
    {
      img: require("@/assets/img/tour.png"),
      title: "투어 티켓"
    },
    {
      img: require("@/assets/img/rentcar.png"),
      title: "국내 렌터카"
    },
    {
      img: require("@/assets/img/roulette.png"),
      title: "럭키드로우"
    },
    {
      img: require("@/assets/img/package.png"),
      title: "패키지"
    },
    {
      img: require("@/assets/img/ai.png"),
      title: "AI 여행플래너"
    },
    {
      img: require("@/assets/img/hotel.png"),
      title: "호텔 특가"
    },
    {
      img: require("@/assets/img/insurance.png"),
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
