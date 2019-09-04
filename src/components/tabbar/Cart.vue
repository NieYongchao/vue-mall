<template>
  <div class="cart-container">
    <div class="cart-list">
      <div class="mui-card" v-for="(item, index) in cartListData" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch 
            v-model="$store.getters.getGoodsSelected[item.id]"
            @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])">
            </mt-switch>
            <img :src="item.src" />

            <div class="info">
              <p class="title">{{item.title}}</p>
              <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
              <p class="sub-info">
                <span class="price">￥{{item.price}}元</span>
                <a class="del" href="#" @click.prevent="remove(item.id, index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="settle">
            <span class="total-price">合计:
              <span style="fontSize: 13px;color: orangered">￥{{$store.getters.getCountAndPrice.price}}</span>
            </span>
            <button class="total-btn">
              结算{{'('+$store.getters.getCountAndPrice.count+')'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/Cart_numbox.vue";

export default {
  data() {
    return {
      picList: [
        { id:0, src: "http://img0.imgtn.bdimg.com/it/u=482632084,510260660&fm=26&gp=0.jpg" },
        { id:1, src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=838388746,1045138551&fm=26&gp=0.jpg" },
        { id:2, src: "http://img1.imgtn.bdimg.com/it/u=1311255017,39263228&fm=26&gp=0.jpg" },
        { id:3, src: "https://img10.360buyimg.com/imgzone/jfs/t1/17029/35/1250/253410/5c106dccEd3990b31/bb1c32193795195a.jpg" }
      ],
      cartListData: []
    };
  },
  created() {
    this.getCartData();
  },
  methods: {
    getCartData() {
      // var cartData = this.$store.state.cart;
      this.$store.state.cart.forEach(item => this.cartListData.push(item));
      this.cartListData.forEach((item)=>{
        if(item.id == this.picList[item.id].id) {
          item.src = this.picList[item.id].src
        }
      })
      // console.log(this.cartListData);
    },
    remove(id, index) {
      // 需要把购物车列表和store.state中的数据都删除掉
      this.cartListData.splice(index, 1);
      this.$store.commit("delGoodsInfo", id);
    },
    // 商品选中状态改变
    selectedChanged (id, val) {
      this.$store.commit("updateSelected", {id, selected:val})
    },
  },
  components: {
    numbox
  }
};
</script>

<style scoped>
.cart-container {
  background-color: #eee;
  overflow: hidden;
}
/* 购物车列表 */
.cart-list .mui-card-content-inner {
  display: flex;
  align-items: center;
  padding: 8px;
}
.cart-list img {
  min-width: 50px;
  max-width: 50px;
  width: 50px;
  height: 70px;
  margin: 0 8px;
}
.info .title {
  margin-bottom: 0;
  font-size: 13px;
  color: black;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.info .sub-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
}
.info p:nth-child(2) .price {
  font-size: 13px;
}
/* 计数器 */
.info .mui-numbox {
  margin: 6px 0;
  width: 115px;
  height: 28px;
}
/* 删除按钮 */
.info .del {
  color: orangered;
  text-decoration: underline;
  font-size: 13px;
  cursor: pointer;
}
/* 结算列表区 */
.settle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-price {
  margin-right: -90px;
}
.total-btn {
  width: 90px;
  height: 40px;
  border-radius: 20px; 
  color: #fff;
  background-color: orangered;
}
.total-btn .count {
  display: none;
}
</style>