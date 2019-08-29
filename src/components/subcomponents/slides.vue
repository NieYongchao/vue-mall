<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeData" :key="item.id">
        <img :src="item.url" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props:["swipeData"]
}
</script>

<style scoped>
/* 轮播图 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mint-swipe-item:nth-child(1) {
  background-color: aquamarine;
}
.mint-swipe-item:nth-child(2) {
  background-color: greenyellow;
}
.mint-swipe-item:nth-child(3) {
  background-color: orangered;
}
</style>