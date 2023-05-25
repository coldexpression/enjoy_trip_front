<template>
  <div class="wrapper">
    <main class="signin">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="boardRegist" id="regist">
            <div class="info">
              <h1>게시글 작성하기</h1>
              <p>
                제목<br /><b-form-input
                  type="text"
                  name="title"
                  v-model="board.title"
                />
              </p>
              <p>
                내용<br />
                <textarea v-model="board.content" type="text" name="content">
여기에 내용을 입력해주세요!</textarea
                >
              </p>
              <input type="submit" class="submit" value="게시글 등록" />
            </div>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import boardregister from "@/assets/js/boardRegist";
console.log(boardregister);
export default boardregister;
</script>
<style scoped>
@import "../../assets/css/boardRegist.css";
</style>
