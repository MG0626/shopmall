<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #tab-bar{
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        font-size: 14px;
        background-color: #f6f6f6;
    }
</style>