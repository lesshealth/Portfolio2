<template>
  <div class="container">
    <h1>My Projects</h1>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../components/icons/work_design1-1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../components/icons/work_design1-1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../components/icons/work_design1-1.png" alt="">
        </div>      </div>

    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'ProjectsView',
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        loop: true, 
        slidesPerView: 1, 
        spaceBetween: 30, 
      });
    },
  },
};
</script>

<style scoped>
h1 {
  display: inline;
  border-bottom: 2px solid rgba(51, 255, 234, 1);
}
.container {
  max-width: 80%;
  margin: 40px auto;
  text-align: center;
}
.swiper-container {
  margin-top: 50px;
  width: 1369px;
  height: 564px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>
