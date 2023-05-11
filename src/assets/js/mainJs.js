import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const attractionStore = "attractionStore";

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
          url: require("../../assets/img/seoul.png")
        },
        {
          cityName: "부산",
          url: require("../../assets/img/busan.png")
        },
        {
          cityName: "제주",
          url: require("../../assets/img/jeju.png")
        },
        {
          cityName: "강원",
          url: require("../../assets/img/gangwondo.png")
        },
        {
          cityName: "대구",
          url: require("../../assets/img/daegu.png")
        },
        {
          cityName: "대전",
          url: require("../../assets/img/daejeon.png")
        },
        {
          cityName: "경주",
          url: require("../../assets/img/gyeongju.png")
        },
        {
          cityName: "광주",
          url: require("../../assets/img/gwangju.png")
        }
      ]
    };
  },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionTopInfo: "GET_TOP_INFO"
    })
  },
  watch: {},
  methods: {
    loadAttractionTopInfo() {
      this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
    }
  },
  mounted() {
    console.log("mounted!!");
    this.loadAttractionTopInfo();
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
  }
};
