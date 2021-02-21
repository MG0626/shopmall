<template>
  <div
    :class="['slider-item',{isTransition}]"
    :style="{ left: (imgIndex.index - index) * 100 + '%' }"
    ref="Sliders"
  >
    <div class="item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      time: 2000,
      isTransition: true
    };
  },
  props: {
    imgIndex: {
      type: Object,
      default: {},
    },
  },
  computed: {
    index() {
      setTimeout(() => {
        this.count++;
        if (this.count == this.imgIndex.length) {
          this.count = 0;
          this.isTransition = !this.isTransition
        }else this.isTransition = true
      }, this.time);
      return this.count;
    },
  },

};
</script>

<style scoped>
.slider-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.slider-item img {
  width: 100%;
  height: 100%;
}
.isTransition{
  transition: all 1s ease-in-out;
}
</style>
