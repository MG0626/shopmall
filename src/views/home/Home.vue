<template>
  <div id="home" ref="home">
      <nav-bar Color="#ffffff" backgroundColor="#d42378">
        <template v-slot:center>购物街</template>
      </nav-bar>
    <srcoll :srcollHeight="srcollHeight" ref="srcoll" @scroll="contentScroll" @requestData="requestData">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @activeData="activeData"
        ref="tabControl"
      ></tab-control>
      <goods-list ref="goodslist" :goods="activeGoodsList" />
      <div class="pullUpLoad">
        <div class="title" v-if="isShow">
          <span>上拉加载更多商品～</span>
        </div>
        <div class="message" v-else>
          <span>正在加载中...</span>
        </div>
      </div>
    </srcoll>
    <back-top @click.native="backClick" v-show="activeBackTop"/>
  </div>
</template>

<script>
//导入网络请求模块
import { getHomeMultidata, getHomeGoods } from "network/home";
//导入组件
import Srcoll from "components/common/scroll/Scroll";
const NavBar = () => import("components/common/navbar/NavBar");
const HomeSwiper = () => import("./childComps/homeSwiper");
const RecommendView = () => import("./childComps/RecommendView");
const FeatureView = () => import("./childComps/FeatureView");
const TabControl = () => import("components/content/tabControl/TabControl");
const GoodsList = () => import("components/common/goods/GoodsList");
const BackTop = () => import("components/content/backTop/BackTop");

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
      },
      activeName: "pop",
      srcollHeight: '0',
      activeBackTop: false,
      isShow: true,
      currentPosition: {}
    };
  },
  components: {
    Srcoll,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop", this.goods.pop.page);
    this.getHomeGoods("new", this.goods.new.page);
    this.getHomeGoods("sell", this.goods.sell.page);
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
      });
    },
    activeData(i) {
      switch (i) {
        case 0:
          this.activeName = "pop";
          break;
        case 1:
          this.activeName = "new";
          break;
        case 2:
          this.activeName = "sell";
          break;
        default:
          break;
      }
      this.$refs.srcoll.scrollTo(this.currentPosition.x, this.currentPosition.y)
    },
    getHeight(){
      let srcollHeight = this.$refs.home.clientHeight - 93 + 'px'
      this.srcollHeight = srcollHeight
    },
    backClick(){
      this.$refs.srcoll.scrollTo(0, 0, 500)
    },
    contentScroll(pos){
      this.activeBackTop = (- pos.y) > parseInt(this.srcollHeight)
      this.currentPosition = {
        x: pos.x,
        y: pos.y
      }
    },
   requestData(){
    this.isShow = false
    let page = this.goods[this.activeName].page + 1
    this.getHomeGoods(this.activeName, page)
    this.goods[this.activeName].page = page
    this.$refs.srcoll.finishPullUp()
    },
    //防抖函数
    debounce(func, time){
      let timer = null
      return function (...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, time)
      }
    }
  },
  computed: {
    activeGoodsList() {
      return this.goods[this.activeName];
    },
  },
  mounted () {
    this.getHeight();
    const refresh = this.debounce(this.$refs.srcoll.refresh, 200)
    this.$bus.$on('imgLoad', () => {
      refresh()
      this.isShow = true
    })
  },
};
</script>

<style>
#home {
  height: 100vh;
  /* margin-bottom: 49px; */
  position: relative;
}
.backTop{
  position: absolute;
  right: 16px;
  bottom: 81px;
}
.pullUpLoad{
  width: 100%;
  height: auto;
  padding: 5px 0;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
</style>