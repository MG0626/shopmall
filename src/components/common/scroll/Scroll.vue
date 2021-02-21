<template>
  <div class="wrapper" :style="{ height: srcollHeight }" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
      isShow: true
    };
  },
  props: {
    srcollHeight: {
      type: String,
      default: "0px",
    },
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return "";
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
      });
      this.scroll.on("scroll", (pos) => {
        this.$emit("scroll", pos);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit('requestData')
      })
    },
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      console.log("----");
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  watch: {},
};
</script>

<style scoped>

</style>