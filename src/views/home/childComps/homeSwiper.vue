<template>
  <swiper
    ref="mySwiper"
    :pagination="{ clickable: true }"
    :options="swiperOptions"
  >
    <swiper-slide v-for="(item, i) in banners" :key="i">
      <img :src="item.image" :alt="item.title" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
//导入swiper组件
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
//导入轮播，底部圆点
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);


export default {
  data(){
    return{
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
      },
    }
  },
  props: {
    banners: {
      type: Array,
    },
  },
  directives: {
    swiper: directive,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.swiper-slide img {
  width: 100%;
  height: auto;
}
</style>