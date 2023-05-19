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
    >
      <vueper-slide
        class="attraction_slide"
        v-for="(item, index) in mainImg"
        :key="index"
        :title="item.cityName"
        :content="item.cityName"
      >
        <template v-slot:content>
          <img class="attraction_slide_img" :src="item.url" />
          <a class="attraction_slid_img_text" href="#">{{ item.cityName }}</a>
          <a href="#">
            <router-link
              :to="{
                name: 'AttractionDetail',
                params: {
                  contentId: item.content_id
                }
              }"
            >
              <button class="attraction_slid_enter_btn" type="button">
                둘러보기
              </button>
            </router-link>
          </a>
        </template>
      </vueper-slide>
    </vueper-slides>

    <!--메인 세션2 슬라이드-->
    <!-- <h1 id="mainPhrases">국내 대표 관광지</h1>
    <section>
      <div id="slider">
        <a href="#" class="control_next"> 오 </a>
        <a href="#" class="control_prev"> 왼 </a>
        <ul>
          <li id="slide_one"></li>
          <li id="slide_two"></li>
          <li id="slide_three"></li>
          <li id="slide_four"></li>
        </ul>
      </div> -->

    <!-- <div class="slider_option">  -->
    <!-- <input type="checkbox" id="checkbox" /> -->
    <!-- <label for="checkbox">자동 넘김</label> -->
    <!-- </div> -->
    <!-- </section> -->

    <!--메인 세션3 관광지2-->

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
      >
        <vueper-slide
          class="attraction_slide"
          v-for="(item, index) in storeBookMarkInfo"
          :key="index"
          :title="item.cityName"
          :content="item.cityName"
        >
          <template v-slot:content>
            <img class="attraction_slide_img" :src="item.firstImage" />
            <a class="attraction_slid_img_text" href="#">{{ item.cityName }}</a>
            <a href="#">
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: item.contentId
                  }
                }"
              >
                <button class="attraction_slid_enter_btn" type="button">
                  둘러보기
                </button>
              </router-link>
            </a>
          </template>
        </vueper-slide>
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
