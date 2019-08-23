// 入口文件
import Vue from 'vue'

// 路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)


// mui 组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入 mint-ui 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)

// 导入app根组件
import app from './App.vue'
// 导入router。js
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})