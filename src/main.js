// 入口文件
import Vue from 'vue'

// 路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刷新， 都先把本地存储中的数据传递给state.cart
var cart = JSON.parse(localStorage.getItem("cart") || "[]");

var store = new Vuex.Store({
  state: {
    cart: cart
  },
  mutations: {
    addToCart(state, goodsInfo) {
      // 如果购物车已经存在商品，则只增加数量
      var flag = false;

      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return true;
        }
      })

      // 如果没有此商品，则把此商品对象放入cart
      if (flag === false) {
        state.cart.push(goodsInfo);
      }

      // 同时把商品对象放入本地存储一份
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 在购物车中操作数量之后把数据保存到本地存储中
    updateGoodsInfo(state, goodsInfo) {
      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.count = parseInt(goodsInfo.count);
          return true
        }
      })

      // 然后保存到本地存储
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 删除商品信息
    delGoodsInfo(state, id) {
      state.cart.some((item, index) => {
        if (item.id == id) {
          state.cart.splice(index, 1)
          return true
        }
      })

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 购物车商品选中状态改变后，把selected的值同步到store中
    updateSelected(state, info) {
      state.cart.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
          return
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    // 实现购物车数量的自动更新
    getAllCount(state) {
      var count = 0;
      state.cart.forEach(item => {
        count += item.count;
      })

      return count
    },
    // 获得购物车中每件商品各自的数量
    getGoodsCount(state) {
      var goods = {};
      state.cart.forEach(item => {
        goods[item.id] = item.count
      })
      return goods;
    },
    // 获得购物车中每件商品是否被选中（selected）
    getGoodsSelected(state) {
      var g = {};
      state.cart.forEach(item => {
        g[item.id] = item.selected;
      })
      return g;
    },
    // 获得商品的总计数量数量和总价格
    getCountAndPrice(state) {
      var g = {
        count: 0,
        price: 0
      };
      state.cart.forEach(item => {
        if (item.selected) {
          g.count += item.count;
          g.price += item.count * item.price;
        }
      })
      return g;
    }
  }
})

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
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


// 导入app根组件
import app from './App.vue'
// 导入router。js
import router from './router.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})