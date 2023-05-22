<template>
  <div class="detail_main">
    <h1 class="detail_title">
      {{ storeAttractionDetailInfo.title }}&nbsp;관광&nbsp;정보
    </h1>

    <!-- 검색으로 살리거나 nav에서 살릴거임 -->
    <!--
<form class="selection">
    <label for="city">도시</label> <select id="city" class="drop_box">
        <option value="" disabled selected>도시를 선택하시오</option>
        <option value="제주">제주도</option>
        <option value="서울">서울</option>
        <option value="강원">강원도</option>
        <option value="부산">부산</option>
        <option value="대전">대전</option>
        <option value="대구">대구</option>
        <option value="광주">광주</option>
        <option value="경주">경주</option>
    </select> <label for="sight_type">관광타입</label> <select id="sight_type"
        class="drop_box">
        <option value="" disabled selected>관광타입을 선택하시오</option>
        <option value="12">관광지</option>
        <option value="14">문화시설</option>
        <option value="15">축제공연행사</option>
        <option value="25">여행코스</option>
        <option value="28">레포츠</option>
        <option value="32">숙박</option>
        <option value="38">쇼핑</option>
        <option value="39">음식점</option>
    </select>

    <button id="fetch_btn" class="submit">요청보내기</button>
</form>
-->

    <!-- 망하면 이대로 제출 -->
    <!--  <table>
    <tr>
        <th>제목</th>
        <th>주소</th>
        <th>이미지1</th>
    </tr>

    <c:forEach items="${attractionList}" var="attraction">
        <tr>
            <td>${attraction.title}</td>
            <td>${attraction.addr}</td>
            <td><img class="detail_img" src="${attraction.img1}"
                onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpizjtvgskfw6Wuu2sLTi2_1vW1gJgFPFtMw&usqp=CAU';" /></td>
        </tr>
    </c:forEach>
</table> -->
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
                  v-if="bookMarkCheck"
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
    <!-- <div id="map" style="width: 100%; height: 400px;"></div>
<section>
    <script>
        var container = document.getElementById('map');
        var options = {
            center : new kakao.maps.LatLng(33.450701, 126.570667),
            level : 3
        };

        var map = new kakao.maps.Map(container, options);
    </script>
</section>  -->
  </div>
</template>

<script>
import attractionDetailJs from "@/assets/js/attractionDetailJs";
export default attractionDetailJs;
</script>

<style scoped>
@import "../../assets/css/detail.css";
</style>
