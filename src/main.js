// 入口文件
import Vue from 'vue'

// 路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 全局设置post提交表单数据格式
Vue.http.options.emulateJSON = true


// mui 组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/js/mui.min.js'


// 按需导入 mint-ui 组件
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// // 懒加载
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
// 按需导入 懒加载没效果 直接全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入格式化时间的插件
import moment from 'moment'
// 定义一个全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})


// 导入app根组件
import app from './App.vue'
// 导入router。js
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})