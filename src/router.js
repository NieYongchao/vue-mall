import VueRouter from 'vue-router'


// 引入footer区的四个组件
import home from './components/tabbar/Home.vue'
import search from './components/tabbar/Search.vue'
import cart from './components/tabbar/Cart.vue'
import myself from './components/tabbar/Myself.vue'

//创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/search', component: search },
    { path: '/cart', component: cart },
    { path: '/myself', component: myself }
  ],
  linkActiveClass: 'mui-active' //用mui-active覆盖掉默认的link-router-active
})


// 把对象暴露出去
export default router