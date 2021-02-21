<template>
  <div class="mainslider">
    <slider>
      
    </slider>
  </div>
</template>

<script>

//导入组件
const Slider = () => import('components/common/slider/Slider')
  export default {
    components: {
      Slider,
    },
    props: {
      imgList: {
        type: Array
      }
    },
  }
</script>

<style scoped>

</style>