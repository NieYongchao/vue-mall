<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input ref="test" id="test" class="mui-input-numbox" type="number" value="1" @change="countCharged" />
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
      // 数量改变时，向父组件传值
      // console.log(this.$refs.test.value)
      this.$emit('getCount', parseInt(this.$refs.test.value))
    }
  },
  props: ["max"],
  watch: {
    // 设置最大购买量为库存量
    'max': function (newVal, oldVal) {
      mui(".mui-numbox").numbox().setOption('max',newVal)
    }
  } 
}
</script>

<style scoped>

</style>