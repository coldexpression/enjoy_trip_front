<template>
  <div class="wrapper">
    <main class="signin">
      <div class="content">
        <section class="section">
          <form v-on:submit.prevent="boardRegist" id="regist">
            <div class="info">
              <h1>게시글 작성하기</h1>
              <p>
                작성인<br /><b-form-input
                  type="text"
                  name="userID"
                  v-model.trim="userID"
                  class="userID"
                  aria-readonly="true"
                />
              </p>
              <p>
                제목<br /><b-form-input
                  type="text"
                  name="title"
                  v-model.trim="title"
                  class="title"
                />
              </p>
              <p>
                내용<br /><b-form-input
                  type="te"
                  name="content"
                  v-model.trim="content"
                  class="content"
                />
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
import axios from "axios";
export default {
  name: "BoardRegist",
  components: {},
  data() {
    return {
      board: {
        userID: "",
        title: "",
        content: ""
      }
    };
  },

  created() {
    //만들자마자 실행됨
  },
  methods: {
    boardRegist() {
      const url = "http://localhost:9000/api/board/regist";
      axios
        .post(url, this.board)
        .then(() => {
          alert("등록성공");
        })
        .catch(err => {
          console.log(err);
          alert("등록 실패");
        });
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/boardRegist.css";
</style>
