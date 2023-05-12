<template>
  <div>
    <main class="signin">
      <div class="content">
        <h1>회원가입</h1>
        <section class="section">
          <form
            action="${pageContext.request.contextPath}/UserController"
            method="post"
            id="signin"
          >
            <div class="info">
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
            </div>
            <div class="agreement">
              <p>
                <input type="checkbox" id="checkAll" /><b
                  ><label for="agreement"
                    ><strong> 전체 이용 약관 동의 </strong></label
                  ></b
                >
              </p>
              <p>
                <input
                  type="checkbox"
                  id="Terms_of_Use"
                  name="Terms_of_Use"
                /><label for="Terms_of_Use">
                  회원 가입 및 운영약관 동의 (필수)</label
                >
              </p>
              <p>
                <input type="checkbox" id="over14" name="over14" /><label
                  for="over14"
                >
                  만 14세 이상입니다.(필수)</label
                >
              </p>
              <p>
                <input
                  type="checkbox"
                  id="personalInfo"
                  name="personalInfo"
                /><label for="personalInfo">
                  개인정보 수집 및 이용 (필수)</label
                >
              </p>
              <p>
                <input
                  type="checkbox"
                  id="locateInfo"
                  name="locateInfo"
                /><label for="locateInfo"> 위치정보 이용약관 (필수)</label>
              </p>
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
            <input type="submit" class="submit" value="회원가입" />
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import "../../assets/css/user.css";
</style>
