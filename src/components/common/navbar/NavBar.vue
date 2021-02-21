<template>
  <div class="nav-bar" :style="{'color': Color, 'background-color':backgroundColor}">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    props: {
      Color: {
        type: String,
        default: '#000'
      },
      backgroundColor: {
        type: String,
        default: '#fff'
      }
    },
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    position: sticky;
    top: 0;
    z-index: 99;
  }
  .nav-bar img{
    width: 24px;
  }
  .left,
  .right{
    width: 20%;
    display: flex;
    justify-content: center;
  }
  .center{
    flex: 1;
    text-align: center;
  }
</style>