<template>
  <main class="main">
    <h1 class="mainPhrases">관광지 인기순위</h1>

    <!--메인 세션1 TOP 4 관광지-->
    <section class="travel_img">
      <ul>
        <div
          v-for="(item, index) in storeAttractionTopInfo"
          :key="index"
          class="text_img"
        >
          <li>
            <router-link
              :to="{
                name: 'AttractionDetail',
                params: {
                  contentId: item.contentId
                }
              }"
            >
              <img :src="item.firstImage" />
              <a class="img_text" href="#">{{ item.title }}</a>
              <a href="#"></a>
            </router-link>
          </li>
        </div>
      </ul>
    </section>

    <h1 class="mainPhrases">지역 관광지</h1>
    <!-- 슬라이드-->
    <vueper-slides
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="1"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      :bullets="false"
      :touchable="false"
    >
      <vueper-slide
        class="attraction_slide"
        v-for="(item, index) in mainImg"
        :key="index"
        :title="item.cityName"
        :content="item.cityName"
      >
        <template v-slot:content>
          <router-link
            :to="{
              name: 'AttractionList',
              params: {
                sidoCode: item.sidoCode,
                cityName: item.cityName
              }
            }"
          >
            <img
              class="attraction_slide_img"
              :src="item.url"
              onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';"
            />
            <a class="attraction_slid_img_text" href="#">{{ item.cityName }}</a>
            <a href="#"></a>
          </router-link>
        </template>
      </vueper-slide>
    </vueper-slides>

    <div v-if="storeLoginState">
      <h1 class="mainPhrases">나의 여행지</h1>
      <vueper-slides
        class="no-shadow"
        :visible-slides="4"
        slide-multiple
        :gap="1"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        :bullets="false"
        :touchable="false"
      >
        <div v-if="storeBookMarkInfo.length > 0" class="wrap">
          <vueper-slide
            class="attraction_slide"
            v-for="(item, index) in storeBookMarkInfo"
            :key="index"
            :title="item.cityName"
            :content="item.cityName"
          >
            <template v-slot:content>
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: item.contentId
                  }
                }"
              >
                <img
                  class="attraction_slide_img"
                  :src="item.firstImage"
                  onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';"
                />
                <a class="attraction_slid_img_text" href="#">{{
                  item.title
                }}</a>
                <a href="#"></a>
              </router-link>
            </template>
          </vueper-slide>
        </div>
        <div v-else class="wrap">
          <img
            src="../assets/img/noBookmark.png"
            alt="북마크된 관광지가 없습니다."
            class="attraction_no_bookmark"
          />
        </div>
      </vueper-slides>
    </div>
  </main>
</template>

<script>
import mainJs from "../assets/js/mainJs";
export default mainJs;
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
