<template>
  <div class="detail_main">
    <h1 class="detail_title">
      {{ storeAttractionDetailInfo.title }}&nbsp;관광&nbsp;정보
    </h1>

    <section class="detailMain">
      <ul class="detail_list">
        <li class="detail_list_item">
          <img
            class="detail_img"
            v-bind:src="storeAttractionDetailInfo.firstImage"
            onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';"
          />
          <ul>
            <li class="detail_title">관광지</li>
            <li class="detail_content">
              {{ storeAttractionDetailInfo.title }}
            </li>
            <li class="detail_title">주소</li>
            <li class="detail_content">
              {{ storeAttractionDetailInfo.addr1 }}
              <font-awesome-icon
                class="location_icon"
                :icon="['fas', 'location-dot']"
                @click="setMapCenter"
              />
              <a v-if="storeLoginState">
                <font-awesome-icon
                  class="heart_icon"
                  v-if="
                    bookmarks.includes(
                      parseInt(storeAttractionDetailInfo.contentId)
                    )
                  "
                  @click="clickLike(1)"
                  :icon="['fa-solid', 'fa-heart']"
                />
                <font-awesome-icon
                  class="heart_icon"
                  v-else
                  @click="clickLike(0)"
                  :icon="['fa-regular', 'fa-heart']"
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <template>
        <div class="map_area">
          <div class="map" id="map"></div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import attractionDetailJs from "@/assets/js/attractionDetailJs";
export default attractionDetailJs;
</script>

<style scoped>
@import "../../assets/css/detail.css";
</style>
