<template>
  <div class="recommend">
    <div class="item" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
      },
    },
  }
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.item{
  width: 20%;
}
.item img{
  width: 100%;
}
.item .title{
  margin-top: 5px;
  font-size: 0.8rem;
  color: #999;
}
</style>