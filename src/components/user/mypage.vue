<template>
  <main class="userInfo">
    <div class="content">
      <h1>마이페이지</h1>

      <section class="section">
        <form
          action="${pageContext.request.contextPath}/UserController"
          method="post"
          id="userInfo"
        >
          <div class="info">
            <input type="hidden" id="pw" value="${userInfo.pwd}" />
            <h2>기존정보 변경하기</h2>
            <p>
              아이디<br /><input
                type="text"
                name="id"
                v-bind:value="$store.getters.getUserId"
                autofocus
                readonly
                id="id"
                placeholder=" 아이디를 입력하시오"
              />
            </p>
            <p>
              이메일<br /><input
                type="email"
                name="email"
                id="email"
                v-bind:value="$store.getters.getUserEmail"
                placeholder=" 이메일"
              />
            </p>

            <h2>비밀번호 변경하기</h2>
            <p>
              기존 비밀번호<br /><input
                type="password"
                name="oldpwd"
                id="oldpwd"
                placeholder="기존 비밀번호"
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
          </div>
          <div>
            <p>
              <input
                type="checkbox"
                id="advertisement"
                name="advertisement"
              /><label for="advertisement">
                특가항공권 및 할인 혜택안내 동의(선택)</label
              >
            </p>
          </div>
          <input type="submit" class="submit" value="회원정보수정" />

          <input type="button" id="delete" class="delete" value="회원탈퇴" />
        </form>
      </section>
    </div>
  </main>
</template>
