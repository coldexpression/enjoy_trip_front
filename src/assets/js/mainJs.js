import { mapGetters } from "vuex";

const attractionStore = "attractionStore";

export default {
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
        }
      ],
      slides: [
        {
          title: "Slide #1",
          content: "Slide 1 content."
        },
        {
          title: "Slide #2",
          content: "Slide 2 content."
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
