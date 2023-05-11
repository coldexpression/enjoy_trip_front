<template>
  <main class="main">
    <h1 id="mainPhrases">관광지 인기순위</h1>

    <!--메인 세션1 TOP 4 관광지-->
    <section class="travel_img">
      <ul>
        <div
          v-for="(item, index) in storeAttractionTopInfo"
          :key="index"
          class="text_img"
        >
          <li>
            <img :src="item.first_image" />
            <a class="img_text" href="#">{{ item.title }}</a>
            <a href="#">
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: item.content_id
                  }
                }"
              >
                <button class="enter_btn" type="button">
                  둘러보기
                </button>
              </router-link>
            </a>
          </li>
        </div>
      </ul>
    </section>

    <h1 id="mainPhrases">지역 관광지</h1>
    <!-- 슬라이드-->
    <vueper-slides
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="2"
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
          <a class="img_text" href="#">{{ item.cityName }}</a>
          <a href="#">
            <router-link
              :to="{
                name: 'AttractionDetail',
                params: {
                  contentId: item.content_id
                }
              }"
            >
              <button class="enter_btn" type="button">
                둘러보기
              </button>
            </router-link>
          </a>
        </template>
      </vueper-slide>
    </vueper-slides>

    <h1 id="mainPhrases">지역 관광지</h1>
    <!--메인 세션2 지역 관광지 -->
    <section class="travel_img">
      <ul>
        <div v-for="(item, index) in mainImg" :key="index" class="text_img">
          <li>
            <img :src="item.url" />
            <a class="img_text" href="#">{{ item.cityName }}</a>
            <a href="#">
              <router-link
                :to="{
                  name: 'AttractionDetail',
                  params: {
                    contentId: index
                  }
                }"
              >
                <button class="enter_btn" type="button">
                  둘러보기
                </button>
              </router-link>
            </a>
          </li>
        </div>
      </ul>
    </section>

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
    <h1 id="mainPhrases">여기도 좋아요</h1>
    <section class="travel_img">
      <ul>
        <!-- <div class="text_img">
          <li>
            <img src="assets/img/daejeon.png" alt="daejeon" />
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=대전"
              class="img_text"
              >대전</a
            >
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=대전"
              ><button class="enter_btn" type="button">둘러보기</button></a
            >
          </li>
        </div>
        <div class="text_img">
          <li>
            <img src="assets/img/daegu.png" alt="daegu" />
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=대구"
              class="img_text"
              >대구</a
            >
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=대구"
              ><button class="enter_btn" type="button">둘러보기</button></a
            >
          </li>
        </div>
        <div class="text_img">
          <li>
            <img src="assets/img/gwangju.png" alt="gwangju" />
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=광주"
              class="img_text"
              >광주</a
            >
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=광주"
              ><button class="enter_btn" type="button">둘러보기</button></a
            >
          </li>
        </div>
        <div class="text_img">
          <li>
            <img src="assets/img/gyeongju.png" alt="gyeongju" />
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=경주"
              class="img_text"
              >경주</a
            >
            <a
              href="${pageContext.request.contextPath}/attraction?param=listByTitle&title=경주"
              ><button class="enter_btn" type="button">둘러보기</button></a
            >
          </li>
        </div> -->
      </ul>
    </section>
  </main>
</template>

<script>
import router from "../router";
import mainJs from "../assets/js/mainJs";
export default mainJs;
// export default {
//   name: "main",
//   data: () => {
//     return {
//       obj: [
//         {
//           img: require("@/assets/img/jeju.png"),
//           title: "제주"
//         },
//         {
//           img: require("@/assets/img/seoul.png"),
//           tilte: "서울"
//         },
//         {
//           img: require("@/assets/img/gangwondo.png"),
//           title: "강원도"
//         },
//         {
//           img: require("@/assets/img/busan.png"),
//           title: "부산"
//         },
//         {
//           img: require("@/assets/img/daejeon.png"),
//           title: "대전"
//         },
//         {
//           img: require("@/assets/img/daegu.png"),
//           title: "대구"
//         },
//         {
//           img: require("@/assets/img/gwangju.png"),
//           title: "광주"
//         },
//         {
//           img: require("@/assets/img/gyeongju.png"),
//           title: "경주"
//         }
//       ]
//     };
//   }
// };
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
<!-- <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style>
@import "../assets/css/index.css";
</style> -->
