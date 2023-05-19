<template>
  <div>
    <section class="detail_main">
      <h1 class="list_title">{{ title }}님의 좋아요 페이지</h1>
      <ul class="detail_list">
        <li
          class="detail_list_item"
          v-for="Attraction in FavoriteList"
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
import likepage from "@/assets/js/likepage";
import nFormatter from "@/assets/js/filters";
export default likepage;
// import axios from "axios";
// export default {
//   data() {
//     return {
//       title: "좋아요 페이지",
//       FavoriteList: []
//     };
//   },
//   created() {
//     axios
//       .get("http://localhost:9000/api/attraction/userFavorite", {
//         params: {
//           userId: "storeUserId"
//         }
//       })
//       .then(res => {
//         // console.log(res);
//         console.log("res.data");
//         console.log(res.data);
//         this.FavoriteList = res.data;
//       });
//   }
// };
</script>

<style scoped>
/* @import "../../assets/css/detail.css"; */
@import "../../assets/css/likepage.css";
</style>
