import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "../js/axios";
export default {
  data() {
    return {
      title: "제목",
      AttractionList: []
    };
  },
  created() {
    axios.get("attraction/list").then(res => {
      console.log(res);
      console.log(res.data);
      this.AttractionList = res.data;
    });
  },
  computed: {
    AttractionCalcList() {
      return this.AttractionList.map(attraction => {
        return {
          title: attraction.title,
          addr: attraction.addr1,
          image: attraction.firstImage,
          likeTxt: attraction.likeCount + 2,
          readTxt: attraction.readCount / 100
        };
      });
    }
  }
};
