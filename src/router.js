import VueRouter from 'vue-router'


// 引入footer区的四个组件
import Home from './components/tabbar/Home.vue'
import Search from './components/tabbar/Search.vue'
import Cart from './components/tabbar/Cart.vue'
import Myself from './components/tabbar/Myself.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import Photos from './components/photos/Photos.vue'
import PhotosInfo from './components/photos/PhotosInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

//创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/cart', component: Cart },
    { path: '/myself', component: Myself },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photos', component: Photos },
    { path: '/home/photosinfo/:id', component: PhotosInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsDesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodsComment' },
  ],
  linkActiveClass: 'mui-active' //用mui-active覆盖掉默认的link-router-active
})


// 把对象暴露出去
export default router