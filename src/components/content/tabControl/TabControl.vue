<template>
  <div class="tab-control">
    <div class="tab-control-content">
      <div
      class="tab-control-item"
      :class="{'active': i == currentIndex}"
      v-for="(item, i) in titles"
      :key="i"
      @click="clickBtn(i)">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  methods: {
    clickBtn(i) {
      this.currentIndex = i
      this.$emit('activeData', i)
    }
  },
};
</script>

<style scoped>
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
  /* z-index: 99; */
}
.tab-control-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}
.active{
  color: #ff5777;
  border-bottom: 3px solid #ff5777;
}
.tab-control-item{
}
</style>