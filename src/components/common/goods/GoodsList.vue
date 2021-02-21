<template>
  <div class="goods-list">
    <div
      class="goods-list-item"
      v-for="(item, i) in goods.list"
      :key="i"
      ref="item"
    >
        <img :src="item.show.img" alt="" @load="imgLoad"/>
      <div class="content">
        <div class="top">
          <h4 class="title">{{ item.title }}</h4>
          <h5 class="collection">已有{{ item.cfav }}个小仙女收藏</h5>
        </div>
        <div class="bottom">
          <div class="price">
            <span class="now">¥{{ item.price }}</span>
            <span class="past">{{ item.orgPrice }}</span>
          </div>
          <div class="btn">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad')
    }
  },
  updated() {
  },
};
</script>

<style scoped>
.goods-list {
  background-color: rgba(200, 200, 200, 0.3);
  padding: 1%;
}
.goods-list-item {
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  background-color: #fff;
  margin: 2%;
}
.goods-list-item img {
  width: 30%;
  height: auto;
  border-radius: 20px;
}
.goods-list-item .content{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  box-sizing: border-box;
}
.goods-list-item h4{
  overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
.collection{
  color: red;
  padding-top: 10px;
  padding-left: 5%;
}
.price{
  font-size: 25px;
  padding: 10px 5%;
  color: red;
}
.price .past{
  padding-left: 0.3rem;
  font-size: 0.7rem;
  color: #666;
  text-decoration: line-through;
}
.btn{
  width: 100px;
  font-size: 13px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color:	#FF0000;
  color: #fff;
  border-radius: 100px;
  margin: 0 auto;
}
</style>