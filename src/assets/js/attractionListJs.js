import { mapGetters } from "vuex";
import { nFormatter } from "./filters";

const attractionStore = "attractionStore";

export default {
  data() {
    return {
      title: "목록 조회",
    };
  },
  computed: {
    ...mapGetters(attractionStore, {
      storeAttractionList: "GET_ATTRACTION_LIST",
    }),
  },
  filters: {
    nFormatter,
  },
  methods: {
    bookMark() {
      console.log("하트 클릭함");
    },
    loadAttractionList() {
      this.$store.dispatch(`${attractionStore}/AC_ATTRACTION_LIST_LOAD`);
    },
  },
  mounted() {
    console.log("list - mounted!!");
    this.loadAttractionList();
    // this.$store.dispatch(`${attractionStore}/AC_TOP_INFO_LOAD`);
  },
};
