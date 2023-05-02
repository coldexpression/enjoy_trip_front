export const imgLoad = {
  name: "imgLoad",
  data: () => {
    return {
      obj: [
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
  }
};

export const loginCheck = {
  name: "loginCheck",
  data: () => ({
    userInfo: {
      userId: "",
      userEmail: "",
      check: false
    }
  }),
  computed: {
    getUserInfo: () => {
      console.log("호출됨?");
      return sessionStorage.length !== 0;
    }
  },
  watch: {
    getUser: newUser => {
      console.log("유저 정보 변경");
      console.log(newUser);
    }
  },
  methods: {
    onLoad: () => {
      if (sessionStorage.getItem("userInfo")) {
        const sessionUserInfo = sessionStorage.getItem("userInfo");
        console.log("nav 접근 : ", sessionUserInfo);
        this.userInfo.check = true;
        this.userInfo.userId = sessionUserInfo.id;
        this.userInfo.userEmail = sessionUserInfo.email;
        console.log(this.userInfo);
      }
    }
  }
};
