<template>
  <div class="detail_main">
    <h1 class="detail_title">
      {{ storeAttractionDetailInfo.title }}
    </h1>

    <section class="detailMain">
      <ul class="detail_list">
        <li class="detail_list_item">
          <div class="img_section">
            <img
              class="detail_img"
              v-bind:src="storeAttractionDetailInfo.firstImage"
              onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';"
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
          </div>
          <ul class="detail_text">
            <li class="detail_overv">
              {{ storeAttractionDetailInfo.overview }}
            </li>
          </ul>
        </li>
      </ul>
      <p class="detail_location">
        {{ storeAttractionDetailInfo.addr1 }}
        <button class="location_button" @click="setMapCenter">
          <font-awesome-icon
            class="location_icon"
            :icon="['fas', 'location-dot']"
          />
          원위치로
        </button>
      </p>
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
