<template>
  <div>
    <section class="detail_main">
      <h1>게시판</h1>
      <table>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        <!-- template는 가상의 태그 -->
        <tr v-for="(board, idx) in storeBoardList" :key="board.num">
          <!-- vue 안에 있는것만 찾을 수 있음 -->
          <td>{{ idx + 1 + "번" }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.userID }}</td>
        </tr>
      </table>

      <router-link to="/board/regist">글 작성하기</router-link>
    </section>
  </div>
</template>

<script>
import boardList from "@/assets/js/BoardList.js";
export default boardList;
</script>

<style scoped>
/* @import "../../assets/css/detail.css"; */
@import "../../assets/css/list.css";
</style>
