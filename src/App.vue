<template>
  <div class="app-container">
    <!-- 顶部header区 -->

    <mt-header fixed title="天狗商城"></mt-header>

    <i class="icon iconfont icon-fanhui back" @click="goBack"></i>
    <!-- <button class="back" @click="goBack">返回</button> -->
    <!-- 中部内容区 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部导航区 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-new" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-new" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item-new" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge"> {{ $store.getters.getAllCount }} </span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-new" to="/myself">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  methods: {
    goBack () {
      if(this.$route.path=="/home"){
        return
      }
      // console.log(this.$route.path)
      this.$router.back(-1);
    }
  }
}
</script>


<style scoped>
.app-container {
  position: relative;
  padding-top: 40px;
  overflow-x: hidden;
}
/* 返回按钮 */
.back {
  position: fixed;
  top: 10px;
  left: 18px;
  border: 0;
  color: #fff;
  background-color: #26A2FF;
  cursor: pointer;
  z-index: 5;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

/* 解决tabbar组件无法切换的问题 */
.mui-bar-tab .mui-tab-item-new.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-new {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-new .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-new .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

