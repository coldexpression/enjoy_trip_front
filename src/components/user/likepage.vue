<template>
  <div class="like_main">
    <section class="detail_main">
      <h1 class="list_title">{{ storeUserId }}님의 좋아요 페이지</h1>
      <ul v-if="storeBookMarkInfo.length > 0" class="detail_list">
        <li
          class="detail_list_item"
          v-for="Attraction in storeBookMarkInfo"
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
            <li class="detail_name">
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: Attraction.contentId
                  }
                }"
                >{{ Attraction.name }}</router-link
              >
            </li>
            <li class="detail_title">{{ Attraction.title }}</li>
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
                    :icon="['fa-solid', 'fa-heart']"
                  />
                  {{ Attraction.likeCount | nFormatter(1) }}
                </li>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div class="no_bookmark" v-else>찜한 관광지 목록이 없습니다.</div>
    </section>
  </div>
</template>

<script>
import likepage from "@/assets/js/likePageJS";
export default likepage;
</script>

<style scoped>
@import "../../assets/css/likepage.css";
</style>
