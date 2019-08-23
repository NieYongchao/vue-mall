<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeData" :key="item.id">
        <img :src="item.url" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 商品分区 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [], //从后台获取数据
      swipeData: [
        //暂时给定数据
        {
          id: 1,
          url:
            "http://img0.imgtn.bdimg.com/it/u=1823000869,2367773093&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "http://img0.imgtn.bdimg.com/it/u=2123043809,3562108529&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          url:
            "http://img3.imgtn.bdimg.com/it/u=2258698440,4004605171&fm=26&gp=0.jpg"
        },
        {
          id: 4,
          url:
            "http://img1.imgtn.bdimg.com/it/u=3330921796,2474592925&fm=26&gp=0.jpg"
        }
      ]
    };
  },

  created() {
    // this.getLunbotuData();
  },

  methods: {
    // getLunbotuData () { //后台获取数据
    //   this.$http.get('http://studyit.io/api/getLunbo').then(result=>{
    //     if(result.body.status === 0){
    //       this.lunbotuList = result.body.message;
    //     } else {
    //       Toast('轮播图获取失败。。。')
    //     }
    //   })
    // }
  }
};
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
/* 九宫格商品分区 */
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 img {
 width: 60px;
 height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 4px solid #eee;
}
</style>