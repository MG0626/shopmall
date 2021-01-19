<template>
  <div class="tab-bar-item" @click="btnClick">
    <slot name="item_icon_active" v-if="isActive"></slot>
    <slot name="item_icon" v-else></slot>
    <div :style="activeStyleColor"><slot name="item_text"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // isActive: true
        };
    },
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#d4237a'
        }
    },
    computed:{
        isActive(){
            return this.$route.path == this.path
        },
        activeStyleColor(){
            return this.isActive ? {color: this.activeColor}: {}
        }
    },
  methods: {
    btnClick() {
        // this.isActive = this.$route.path == this.path
      console.log(this.isActive);
    },
  },
};
</script>

<style>
a {
  flex: 1;
  text-decoration: none;
  color: #000;
}
.tab-bar-item {
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  margin-top: 2px;
  width: 25px;
  vertical-align: middle;
}
/* .router-link-active {
  color: #d4237a;
} */
</style>