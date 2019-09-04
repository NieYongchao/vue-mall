<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input ref="test" id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countCharged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  mounted () {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    // console.log("max"+this.max)
  },
  methods: {
    countCharged () {
      // console.log(this.$refs.test.value + "---" + this.goodsId)
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsId,
        count: this.$refs.test.value
      })
    }
  },
  props: ["initCount", "goodsId"]
}
</script>

<style scoped>

</style>