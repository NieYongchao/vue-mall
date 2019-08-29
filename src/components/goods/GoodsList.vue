<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id"
    :to="'/home/goodsinfo/'+item.id" tag="div"> 
      <img
        :src="item.img_url"
        alt
      />
      <p class="title">{{item.title}}</p>
      <div class="info">
        <span class="price">￥{{item.price}}元</span>
        <span class="sales-volume">{{item.salesVolume}}件已售</span>
      </div>
    </router-link> -->
    <div class="goods-item" v-for="item in goodsList" :key="item.id"
    @click="goDetail(item.id)"> 
      <img
        :src="item.img_url"
        alt
      />
      <p class="title">{{item.title}}</p>
      <div class="info">
        <span class="price">￥{{item.price}}元</span>
        <span class="sales-volume">{{item.salesVolume}}件已售</span>
      </div>
    </div>

    <mt-button type="primary" size="large">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          id: 0,
          title:
            "【限量抢券立减100】Meizu/魅族16s旗舰新品4G智能全网通4800万OIS光学防抖骁龙855全面屏手机",
          price: "2599",
          salesVolume: "3548",
          img_url:
            "https://img.alicdn.com/bao/uploaded/i2/1695308781/O1CN01ybMRWq2EjkPMjpUaa_!!1695308781.jpg"
        },
        {
          id: 1,
          title:
            "【新品】Samsung/三星Galaxy Note10 SM-N9700 骁龙855 IP68防水 智慧型S Pen",
          price: "5999",
          salesVolume: "2248",
          img_url:
            "https://img.alicdn.com/imgextra/i4/370627083/O1CN01jSPZKY22C3skiLbSU_!!370627083.jpg_250x250Q90.jpg_.webp"
        },
        {
          id: 2,
          title:
            "【12期免息半年延保】vivo X27 限量版新品上市4800万广角三摄升降式摄像头全面屏指纹手机官方正品vivox27",
          price: "2698",
          salesVolume: "14732",
          img_url:
            "https://img.alicdn.com/imgextra/i1/883737303/O1CN0143XSSR23op1YJjrAc_!!883737303.jpg_250x250Q90.jpg_.webp"
        },
        {
          id: 3,
          title:
            "【6期免息直降1500元】vivo NEX全面屏升降摄像头6G大运存官方旗舰店官网正品智能手机vivonex NEX apex",
          price: "2198",
          salesVolume: "5782",
          img_url:
            "https://img.alicdn.com/imgextra/i2/883737303/O1CN01POikNT23op1UeblvL_!!883737303.jpg_250x250Q90.jpg_.webp"
        },
        {
          id: 4,
          title:
            "【6期免息+买赠壳膜】小米CC9美图定制版骁龙710智能游戏学生老人老年手机大屏大字小米官方旗舰店正品xiaomi",
          price: "2599",
          salesVolume: "4568",
          img_url:
            "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01GNaJz229zFjlEcTuo_!!1714128138.png_430x430q90.jpg"
        },
        {
          id: 5,
          title: "东芝(TOSHIBA) 1TB 5400转 128M SATA 笔记本硬盘 MQ04ABF100",
          price: "275.00~305.00",
          salesVolume: "3548",
          img_url:
            "https://img.alicdn.com/imgextra/i1/2201225205913/O1CN01Y3Y6Iz1tYCT9Usfxi_!!2-item_pic.png_430x430q90.jpg"
        },
        {
          id: 6,
          title: "友臣肉松饼整箱2.5斤装 特产早餐糕点小吃口袋面包成人美食零食品",
          price: "45.90",
          salesVolume: "789",
          img_url:
            "https://gw.alicdn.com/bao/uploaded/i3/681185851/O1CN01J3AddJ1t5nw5RhEJd_!!0-item_pic.jpg"
        },
        {
          id: 7,
          title: "康师傅饮料330ml*12瓶冰红茶柠檬味低糖绿茶茉莉蜜茶混合装新品",
          price: "30.00~60.00",
          salesVolume: "3246",
          img_url:
            "https://img.alicdn.com/imgextra/i3/2147336867/O1CN01XXPVFm20b8KidzLtS_!!2147336867.jpg_430x430q90.jpg"
        },
        {
          id: 8,
          title: "361运动鞋男户外鞋夏季网面透气户外登山鞋361度轻便溯溪鞋跑步鞋",
          price: "99",
          salesVolume: "1548",
          img_url:
            "https://gw.alicdn.com/bao/uploaded/i4/3495454362/O1CN014xfWMf1i5qAa7Fdmm_!!0-item_pic.jpg"
        },
        {
          id: 9,
          title: "哥仑步皮肤衣男夏季新款防紫外线情侣外套户外轻薄透气防晒衣女",
          price: "189",
          salesVolume: "348",
          img_url:
            "https://gw.alicdn.com/bao/uploaded/i1/362954818/O1CN01o2ck001lSgkPCiNI1_!!0-item_pic.jpg"
        },
        {
          id: 10,
          title: "Midea/美的 KFR-35GW/WDCN8A3@ 大1.5匹变频冷暖壁挂式空调挂机",
          price: "2299.0",
          salesVolume: "3418",
          img_url:
            "https://img.alicdn.com/bao/uploaded/i4/201749140/O1CN01W4tGo22HOAYPFNBWw_!!2-item_pic.png_400x400q60.jpg"
        }
      ]
    }
  },
  methods: {
    goDetail (id) {
      // this.$router.push("/home/goodsinfo/"+id)
      this.$router.push({ name: "goodsinfo", params: { id } })
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 13px;
  margin-bottom: 50px;
  background-color: rgb(240, 236, 236);
}
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px 2px #ccc;
  overflow: hidden;
  /* min-height: 251px; */
}
.goods-item img {
  width: 100%;
}
.goods-item .title {
  color: rgb(0, 0, 0);
  font-size: 12px;
  line-height: 16px;
  margin-top: 2px;
  padding: 2px 5px;
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.goods-item .info {
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}
.goods-item .price {
  font-size: 14px;
  color: red;
}
.goods-item .sales-volume {
  font-size: 13px;
  color: rgb(161, 160, 160);
}
</style>