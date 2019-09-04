#这是一个vue商城项目


##header区域使用了mint-ui中的Header组件

##footer区域使用了mui中的Tabbar.html
 1. 购物车还需要引入扩展图标库css样式
 2. 另外还需要扩展字体库 ttf 文件


##home组件中的轮播图使用mint-ui中的swipe组件

##安装vue-resource用于获取数据

##新闻资讯页面制作
1. 绘制页面，使用mui的media-list.html
2. 使用vue-resource渲染数据

##新闻资讯列表 点击跳转详情页

##单独制作一个评论子组件

##图片分享页面制作
###顶部导航栏使用mui中的tab-top-webview-main.html
  +导航条默认是不滚动的，需要进入mui.js做相应的配置,初始化scroll控件,
  +遇到错误 "bundle.js:48328 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict"
  +可以使用npm安装 babel-plugin-transform-remove-strict-mode 取消严格模式
  +并在.babelrc中做配置"plugins": ["transform-strict-mode"]
  +测试ok之后，原有的tabbar组件出现无法切换的问题，可以把类名class="mui-tab-item"改变一下

##购物车列表制作
1.使用vuex存储数据
