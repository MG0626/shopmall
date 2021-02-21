<template>
  <div id="slider" :style="sliderHeights">
    <slider-item
      v-for="(item, index) in imgList"
      :key="index"
      :imgIndex="{ index: parseInt(index), length: imgList.length }"
      ref="Sliders"
    >
      <img :src="item.image" :alt="item.title" ref="sliderItem"/>
    </slider-item>
    <div class="indexActive">
      <div class="circle">11</div>
    </div>
  </div>
</template>

<script>
const SliderItem = () => import("./SliderItem");
export default {
  data() {
    return {
      sliderHeight: 0
    };
  },
  components: {
    SliderItem,
  },
  props: {
    imgList: {
      type: Array,
    },
  },
  methods: {
    test() {
      console.log(this.$refs.Sliders);
      try {
        this.sliderHeight = this.$refs.sliderItem[0].clientHeight
      } catch (error) {
      }
    }
  },
  updated () {

    this.test();
    this.$nextTick(function (){
    })
  },
  computed: {
    sliderHeights() {
      return {
        'height' : this.sliderHeight + 'px',
        'min-height' : this.sliderHeight + 'px',
      }
    }
  },
};
</script>

<style>
#slider {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: red;
}
.indexActive {
  position: absolute;
  bottom: 0;
}
.indexActive .circle {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
}
</style>