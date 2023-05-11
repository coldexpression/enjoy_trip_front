<template>
  <div id="app">
    <Navbar />
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/nav.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
/* @import "../src/assets/css/index.css";
@import "../src/assets/css/include.css";
@import "../src/assets/css/user.css"; */
</style>
