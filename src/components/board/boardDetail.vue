<template>
  <div>
    <section class="detail_main">
      <h1>게시글</h1>
      <button class=" custom-btn btn-16 listbtn" @click="move">
        <span>목록으로</span>
      </button>
      <button
        class="custom-btn btn-16 deletebtn"
        @click="deleteboard(`${storeBoard.num}`)"
      >
        <span>글 삭제</span>
      </button>
      <div class="board">
        <table>
          <tr>
            <th colspan="2">
              {{ storeBoard.title }}
            </th>
          </tr>
          <tr>
            <td>등록일</td>
            <td>{{ storeBoard.writeDate }}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{{ storeBoard.userID }}</td>
          </tr>
          <tr>
            <td>조회수</td>
            <td>{{ storeBoard.readCount }}</td>
          </tr>
        </table>

        <div class="content">
          <p>
            {{ storeBoard.content }}
          </p>
        </div>
      </div>
      <table class="move">
        <tr>
          <td>이전글</td>
          <td></td>
        </tr>
        <tr>
          <td>다음글</td>
          <td></td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import boardDetail from "@/assets/js/BoardDetail.js";
export default boardDetail;
</script>

<style scoped>
@import "../../assets/css/boardDetail.css";
</style>
