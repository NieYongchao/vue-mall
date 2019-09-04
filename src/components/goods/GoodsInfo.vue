<template>
  <div class="goodsInfo">
    <!-- 购物车小球 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter" 
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图区 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" style="padding:0">
          <slides :swipeData="swipeData[this.id]"></slides>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo[this.id].title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            心动价:
            <span class="now-price">￥{{goodsInfo[this.id].new_price}}</span>&nbsp;&nbsp;价格:
            <del>￥{{goodsInfo[this.id].price}}</del>
          </p>
          <div class="amount-box">
            <p class="amount">购买数量</p>
            <!-- 在GoodsInfo.vue中需要获取到 GoodsInfo_numbox.vue中的数量值 -->
            <numbox @getCount="getCharge" :max="goodsInfo[this.id].stock"></numbox>
          </div>
          <p class="buy-btn">
            <mt-button type="default" size="normal" class="btn" @click="addToCart">加入购物车</mt-button>
            <mt-button type="danger" size="normal" class="btn">立即购买</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">详情列表:</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo[this.id].goods_num}}</p>
          <p>库存：{{goodsInfo[this.id].stock}}</p>
          <p>上架时间：{{goodsInfo[this.id].for_sale}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goGoodsDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goGoodsCmt(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图组件
import slides from "../subcomponents/slides.vue";
//数字选择框组件
import numbox from "../subcomponents/GoodsInfo_numbox.vue"; 

import { Toast } from "mint-ui";
 
export default {
  data() {
    return {
      ballFlag: false,
      selectedCount: 1,
      id: this.$route.params.id,
      swipeData: [
        [
          { url:"http://img0.imgtn.bdimg.com/it/u=2863375581,2724380779&fm=26&gp=0.jpg " },
          { url:"http://img0.imgtn.bdimg.com/it/u=482632084,510260660&fm=26&gp=0.jpg" },
          { url:"http://img5.imgtn.bdimg.com/it/u=2397586547,2215453282&fm=26&gp=0.jpg" }
        ],
        [
          { url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=838388746,1045138551&fm=26&gp=0.jpg" },
          { url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=388202529,3229834933&fm=26&gp=0.jpg" }
        ],
        [
          { url:"http://img1.imgtn.bdimg.com/it/u=1311255017,39263228&fm=26&gp=0.jpg" },
          { url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2637480319,28735426&fm=26&gp=0.jpg" }
        ],
        [
          { url:"https://paimgcdn.baidu.com/40695AE592802129?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1841385223.jpg&rz=urar_2_968_600&v=0" },
          { url:"https://img10.360buyimg.com/imgzone/jfs/t1/17029/35/1250/253410/5c106dccEd3990b31/bb1c32193795195a.jpg" },
          { url:"https://img10.360buyimg.com/imgzone/jfs/t1/23165/24/1137/79577/5c0f79eeE5c5463e9/43c7a4f631243f51.jpg" }
        ]
      ],
      goodsInfo: [
        { id: 0,
          title: "【限量抢券立减100】Meizu/魅族16s旗舰新品4G智能全网通4800万OIS光学防抖骁龙855全面屏手机",
          price: "3198",
          new_price: "2699",
          goods_num: "1a456da61313a2sd1a3sd",
          stock: "64",
          for_sale: "2019-4-5"
        },
        { id: 1,
          title: "【12期免息 换新补贴至高1000元】Samsung/三星Galaxy S10 SM-G9730骁龙855 4G新品游戏全面屏智能手机",
          price: "5999",
          new_price: "6999",
          goods_num: "1a456da61313a2sd1a3sd",
          stock: "879",
          for_sale: "2019-3-20"
        },
        { id: 2,
          title: "【12期免息半年延保】vivo X27 限量版新品上市4800万广角三摄升降式摄像头全面屏指纹手机官方正品vivox27",
          price: "2698.00",
          new_price: "2998.00",
          goods_num: "1a456da61313a2sd1a3sd",
          stock: "24",
          for_sale: "2019-2-5"
        },
        { id: 3,
          title: "【12期免息立减400元】vivo NEX双屏版全网通智能4G官方正品双屏手机vivonex双屏版 nex双面屏 nex2 apex",
          price: "4998.00",
          new_price: "5998.00",
          goods_num: "1a456da61313a2sd1a3sd",
          stock: "25",
          for_sale: "2019-3-15"
        }
      ]
    };
  },
  created () {
    // console.log(this.id)
  },
  methods: {
    goGoodsDesc (id) {
      this.$router.push({name:"goodsDesc", params: id})
    },
    goGoodsCmt (id) {
      this.$router.push({name:"goodsComment", params: id})
    },
    //购物车小球动画
    addToCart () {
    
      this.ballFlag = !this.ballFlag;
      Toast('成功加入购物车ヾ(≧▽≦*)o');
      // 把购买数据传入  state中的cart
      var goodsInfo = {
        id: this.id,
        title: this.goodsInfo[this.id].title,
        count: this.selectedCount,
        price: this.goodsInfo[this.id].new_price,
        selected: true
      };
      
      this.$store.commit("addToCart", goodsInfo);

    },
    beforeEnter (el) {
      el.style.transform = "translate(0, 0)";
    },
    enter (el, done) {
      el.offsetWidth;

      // 小球动画优化
      // 把数据写成动态的，否则在有滚动条或者不同分辨率下，动画有显示bug
      // 获取小球默认相对于界面位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取购物车小球应到达的位置  由于购物车是存在于APP.vue中的，所以这里用原生dom获取
      const badgePosition = document.getElementById("badge").getBoundingClientRect();

      xRelative = badgePosition.left - ballPosition.left;
      yRelative = badgePosition.top - ballPosition.top;


      el.style.transform = `translate(${xRelative}px, ${yRelative}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.01,-0.7,.95,.36)"; 
      done();
    },
    afterEnter (el) { 
      this.ballFlag = !this.ballFlag;
    },

    // 获取子组件中的数量值
    getCharge (count) {
      this.selectedCount = count;
      // console.log(this.selectedCount)
    }
  },
  components: {
    slides: slides,
    numbox: numbox
  }
};
</script>

<style scoped>
.goodsInfo {
  position: relative;
  background-color: gainsboro;
  overflow: hidden;
  margin-bottom: 50px;
}
.mui-card-header {
  font-size: 13px;
}
/* 价格 */
.mui-card-content-inner p {
  color: rgb(129, 127, 127);
}
.price {
  font-size: 13px;
}
.price .now-price {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
/* 购买数量 */
.amount-box {
  line-height: 33px;
}
.amount {
  display: inline;
  font-size: 13px;
}
.mui-numbox {
  width: 120px;
  height: 35px;
}
.buy-btn {
  margin-top: 10px;
}
.btn {
  font-size: 15px;
  width: 30%;
  height: 35px;
}
.btn:nth-child(1) {
  color: #fff;
  background-color: orangered;
}
.btn:nth-child(2) {
  background-color: red;
}

/* 详情列表 */
.mui-card-footer {
  display: block;
}
.mui-card-footer button {
  margin: 15px 0;
}
/* 购物车小球 */
.ball {
  position: fixed;
  left: 132px;
  top: 377px;
  z-index: 11;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  /* transform: translate(120px, 218px); */
}
</style>