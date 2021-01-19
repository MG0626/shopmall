<template>
  <div id="app">
    <h1>我是app组件</h1>
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
const MainTabBar = () => import('components/content/mainTabBar/MainTabBar') 
export default {
  name: "App",
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
