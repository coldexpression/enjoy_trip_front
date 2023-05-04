import { mapGetters } from "vuex";

const attractionStore = "attractionStore";

export default {
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
