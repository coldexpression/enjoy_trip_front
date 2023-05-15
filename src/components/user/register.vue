<template>
  <div class="wrapper">
    <main class="signin">
      <div class="content">
        <section class="section">
          <form
            action="${pageContext.request.contextPath}/UserController"
            method="post"
            id="signin"
          >
            <div class="info">
              <h1>회원가입</h1>
              <input type="hidden" name="action" value="signin" />
              <p>
                아이디<br /><input
                  type="text"
                  name="id"
                  id="id"
                  autofocus
                  placeholder=" 아이디를 입력하시오"
                />
              </p>
              <p>
                이메일<br /><input
                  type="email"
                  name="emai;"
                  id="email"
                  placeholder=" 이메일"
                />
              </p>
              <p>
                비밀번호<br /><input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder=" 비밀번호"
                />
              </p>
              <p>
                비밀번호 확인<br /><input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  placeholder=" 비밀번호 확인"
                />
              </p>
              <input type="submit" class="submit" value="회원가입" />
            </div>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import "../../assets/css/user.css";
</style>
