<template>
  <div>
    <!-- 头部导航栏区 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 1 ? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in photosTitle"
            :key="item.id"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片内容区 -->
    <ul class="pic-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photosinfo/' + item.id"
      tag="li" >
        <img v-lazy="item.img_url" />
        <p class="item-info">{{item.info}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      photosTitle: [
        { id: 1, title: "推荐" },
        { id: 2, title: "家居生活" },
        { id: 3, title: "自然户外" },
        { id: 4, title: "游戏壁纸" },
        { id: 5, title: "桌面主题" },
        { id: 6, title: "明星写真" }
      ],
      list: [
        {
          id: 0,
          img_url: "/src/picture/picture_01.jpg",
          info:
            "人，按通常的定义，人是有血有肉的动物，用两足行走，能感觉、思想和判断，但是，在福音书和让雅·克卢·梭看来，人不应该感觉、思想和判断；甚至应该匍匐而行，好让教士轻快地骑在他身上。"
        },
        {
          id: 1,
          img_url: "/src/picture/picture_02.jpg",
          info:
            "一个人的自愈的能力越强，才越有可能接近幸福。做一个寡言，却心有一片海的人，不伤人害己，于淡泊中，平和自在。"
        },
        {
          id: 2,
          img_url: "/src/picture/picture_03.jpg",
          info:
            "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。"
        },
        {
          id: 3,
          img_url: "/src/picture/picture_04.jpg",
          info:
            "过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。"
        },
        {
          id: 4,
          img_url: "/src/picture/picture_05.jpg",
          info:
            "我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。"
        },
        {
          id: 5,
          img_url: "/src/picture/picture_06.jpg",
          info:
            "在人类历史的长河中，真理因为像黄金一样重，总是沉于河底而很难被人发现，相反地，那些牛粪一样轻的谬误倒漂浮在上面到处泛滥"
        },
        {
          id: 6,
          img_url: "/src/picture/picture_07.jpg",
          info:
            "如果你浪费了自己的年龄，那是挺可悲的。因为你的青春只能持续一点儿时间——很短的一点儿时间。"
        },
        {
          id: 7,
          img_url: "/src/picture/picture_08.jpg",
          info:
            "爱情只有当它是自由自在时，才会叶茂花繁。认为爱情是某种义务的思想只能置爱情于死地。只消一句话：你应当爱某个人，就足以使你对这个人恨之入骨。"
        },
        {
          id: 8,
          img_url: "/src/picture/picture_09.jpg",
          info:
            "在岁月中跋涉，每个人都有自己的故事，看淡心境才会秀丽，看开心情才会明媚。累时歇一歇，随清风漫舞，烦时静一静，与花草凝眸，急时缓一缓，和自己微笑。"
        },
        {
          id: 9,
          img_url: "/src/picture/picture_10.jpg",
          info:
            "在岁月中跋涉，每个人都有自己的故事，看淡心境才会秀丽，看开心情才会明媚。累时歇一歇，随清风漫舞，烦时静一静，与花草凝眸，急时缓一缓，和自己微笑。"
        }
      ],
    };
  },
  created() {
    // console.log(this.list)
  },
  mounted() {
    //dom渲染完毕
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {}
};
</script>

<style scoped>
* {
  /* 处理警告 */
  touch-action: pan-y;
  list-style: none;
  margin: 0;
  padding: 0;
}
/* 懒加载 */
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.pic-list {
  padding: 10px;
}
.pic-list li {
  position: relative;
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 10px #ccc;
}
.pic-list li img {
  width: 100%;
  vertical-align: middle;
}
.pic-list li .item-info {
  padding: 5px;
  position: absolute;
  bottom: 0;
  font-size: 13px;
  text-align: left;
  text-indent: 2em;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>