<template>
  <div>
    <section class="detail_main">
      <h1 class="list_title">{{ title }}</h1>
      <ul class="detail_list">
        <li
          class="detail_list_item"
          v-for="Attraction in AttractionList"
          :key="Attraction.title"
        >
          <router-link
            :to="{
              name: 'AttractionDetail',
              params: {
                contentId: Attraction.contentId
              }
            }"
          >
            <img
              class="detail_img"
              v-bind:src="Attraction.firstImage"
              onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';"
          /></router-link>
          <ul>
            <li class="detail_title">
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: Attraction.contentId
                  }
                }"
                >{{ Attraction.title }}</router-link
              >
            </li>

            <li class="detail_addr">{{ Attraction.addr1 }}</li>
            <li class="detail_bookmark"></li>
            <li>
              <ul class="detail_count">
                <li>
                  <font-awesome-icon :icon="['fa-solid', 'fa-eye']" />
                  {{ Attraction.readCount | nFormatter(1) }}
                </li>
                <li @click="log">
                  <font-awesome-icon
                    class="heart_icon"
                    v-if="Attraction.liked"
                    :icon="['fa-solid', 'fa-heart']"
                  />
                  <font-awesome-icon
                    class="heart_icon"
                    v-else
                    :icon="['fa-regular', 'fa-heart']"
                  />
                  {{ Attraction.likeCount | nFormatter(1) }}
                </li>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import * as filters from "../../assets/js/filters.js";
import axios from "axios";
export default {
  data() {
    return {
      title: "제목",
      AttractionList: []
    };
  },
  created() {
    axios.get("http://localhost:9000/api/attraction/list").then(res => {
      console.log(res);
      console.log(res.data);
      this.AttractionList = res.data;
    });
  },
  methods: {
    log() {
      console.log("하트 클릭함");
    }
  },
  filters: {
    nFormatter: function(num, digits) {
      const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var item = lookup
        .slice()
        .reverse()
        .find(function(item) {
          return num >= item.value;
        });
      return item
        ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
        : "0";
    }
  }
  // computed: {
  //   AttractionCalcList() {
  //     return this.AttractionList.map(attraction => {
  //       return {
  //         title: attraction.title,
  //         addr: attraction.addr1,
  //         image: attraction.firstImage,
  //         likeTxt: attraction.likeCount + 2,
  //         readTxt: attraction.readCount / 100
  //       };
  //     });
  //   }
  // }
};
</script>

<style scoped>
/* @import "../../assets/css/detail.css"; */
@import "../../assets/css/list.css";
</style>
