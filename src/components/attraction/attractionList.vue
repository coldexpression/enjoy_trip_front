<template>
  <div>
    <section class="detail_main">
      <h1 class="list_title">{{ storeAttractionTitle }}의 관광지</h1>
      <ul class="detail_list">
        <li
          class="detail_list_item"
          v-for="Attraction in storeAttractionList"
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
                <li @click="bookmarkClick(Attraction.contentId)">
                  <font-awesome-icon
                    class="heart_icon"
                    v-if="bookmarks.includes(parseInt(Attraction.contentId))"
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
import attractionList from "@/assets/js/attractionListJS.js";
export default attractionList;
</script>

<style scoped>
/* @import "../../assets/css/detail.css"; */
@import "../../assets/css/list.css";
</style>
