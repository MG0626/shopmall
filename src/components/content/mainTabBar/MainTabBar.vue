<template>
  <tab-bar>
    <router-link to="/home">
      <tab-bar-item path="/home">
        <img slot="item_icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item_text">首页</div>
      </tab-bar-item>
    </router-link>
    <router-link to="/category">
      <tab-bar-item path="/category">
        <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="item_text">分类</div>
      </tab-bar-item>
    </router-link>
    <router-link to="/shopcart">
      <tab-bar-item path="/shopcart">
        <img slot="item_icon" src="~assets/img/tabbar/shoppingcart.svg" />
        <img
          slot="item_icon_active"
          src="~assets/img/tabbar/shoppingcart_active.svg"
          alt=""
        />
        <div slot="item_text">购物车</div>
      </tab-bar-item>
    </router-link>
    <router-link to="/profile">
      <tab-bar-item path="/profile">
        <img slot="item_icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </router-link>
  </tab-bar>
</template>

<script>
//导入组件
//懒加载
const TabBar = () => import("components/common/tabbar/TabBar.vue")
const TabBarItem = () => import("components/common/tabbar/TabBarItem")

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style></style>
