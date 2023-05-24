<template>
  <div>
    <section class="detail_main">
      <h1>게시판</h1>
      <button class="custom-btn btn-16" @click="regist()">
        <span>글 작성하기</span>
      </button>
      <div class="board">
        <table>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
          <!-- template는 가상의 태그 -->
          <tr
            v-for="(board, idx) in storeBoardList"
            :key="board.num"
            @click="move(board.num)"
          >
            <!-- <td> -->
            <!-- <router-link :to="{ path: `/board/page/${board.num}` }"> -->
            <!-- <router-link
                :to="{ name: `boardDetail`, params: { num: board.num } }"
              > -->
            <!-- <router-link :to="{ path: 'board/page/' + board.num }"></router-link> -->
            <!-- {{ idx + 1 + "번" }}</router-link
              > -->
            <!-- </td> -->
            <td>
              {{ idx + 1 + "번" }}
            </td>
            <td>{{ board.title }}</td>
            <td>{{ board.userID }}</td>
            <td>{{ board.writeDate }}</td>
            <td>{{ board.readCount }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import boardList from "@/assets/js/BoardList.js";
export default boardList;
</script>

<style scoped>
@import "../../assets/css/boardList.css";
</style>
