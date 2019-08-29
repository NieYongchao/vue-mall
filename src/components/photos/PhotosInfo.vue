<template>
  <div class="photosInfo-container">
    <h3 class="photosInfo-title">{{infoList[this.id].title}}</h3>
    <p>
      <span>发表于:{{infoList[this.id].time}}</span>
      <span>阅读量:{{infoList[this.id].reading}}</span>
    </p>
    <hr />
    <!-- 缩略图 -->
    <!-- <div class="pic-list">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div> -->
    <!-- 内容区 -->
    <div class="photosInfo-content" v-html="infoList[this.id].content"></div>
    <comment></comment>
  </div>
</template>

<script>
// 评论子组件
import Comment from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      infoList: [
        {
          id: 0,
          title: "亚洲电子竞技大师杯诞生，亚电体联欲打造“电竞亚运会”",
          time: "2019-5-24 9:45:33",
          reading: "1568",
          content: `<p>尽管雅加达亚运会闭幕已有近一年时间，但人们依旧会提起那个属于电子竞技的高光时刻。那是电子竞技首次出现在大型综合性国际体育赛事的舞台上，
          选手穿上国家队服，与其他项目的运动员同住亚运村，赢得胜利后赛场升起国旗、奏响国歌，与传统运动项目无二。</p>
          <p>在这场电子竞技的首秀中，亚洲电子体育联合会(英文缩写AESF，以下简称亚电体联)在赛事组织、筹办中发挥着极其重要的作用。</p><p>据悉，2019年东南亚运动会的电竞项目比赛也将由亚电体联具体主导。
          就在8月13日，亚电体联主席霍启刚与阳光媒体集团董事长杨澜共同宣布启动全新赛事：AESF e-Masters亚洲电子竞技大师杯。赛事全程由阳光媒体集团、阳光电竞承办，香蕉游戏传媒、联泰集团协办。
          这是亚洲首个顶级综合性电子竞技赛事，也是继雅加达亚运会之后，国与国之间的又一次合作。而这一次，电子竞技又将会为我们带来哪些难忘的瞬间？</p>`
        },
        {
          id: 1,
          title: "Perkz又开始跳了？发推嘲讽IG被3:0成八强，没办法复仇太遗憾了！",
          time: "2019-5-24 10:5:43",
          reading: "5489",
          content: `<p>LPL夏季赛季后赛已经是完成了第一轮的对决，IG在昨天是再次爆冷，输给了LNG战队，最终算是止步了八强，可以说非常的尴尬，
          总结来说输比赛的因素其实很多，也不能单怪某一个选手的发挥。</p><p>赛后关于IG失利的分析也是很多，当然关于IG的S9总决赛形势也是议论纷纷，
          至少目前这个状态肯定是去不了S9的，所以IG必须要再次调整了，而在比赛结束之后，G2的AD选手Perkz是来了一个一语双关的嘲讽，真的是有点落井下石的味道了，也是引发了热议。</p>`
        },
        {
          id: 2,
          title: "PS5开发机3D渲染图曝光 简直就是一架星际飞船",
          time: "2019-5-24 12:9:11",
          reading: "3358",
          content: `<p>本周，有外媒曝出索尼关于PS5的一项外观设计专利，机身中间的“大V领”和两侧像鱼鳃一样的格栅十分惹眼（V在罗马数字中代表5）。</p>
          <p>知名游戏厂商Codemasters的高级美术师Matthew Stott认为，这这可能就是PS5的最终外形。
          不过根据过往经验，开发机外形并不等同于在市面上发售的游戏机，当年PS4的开发机造型也是比较笨重，但最终量产上市的PS4完全是另外一番面貌。</p>
          <p>因此有国外大神以设计图为原ppp型做了PS5开发机3D渲染图，看起来未来感十足，就像一架星际飞船。
          此前有报道称PS5将在2020年11月开始出货，不过在索尼官宣之前，玩家们所能做的只有耐心等待。</>`
        },
        {
          id: 3,
          title: "RTX 2080 Ti Super偷跑？真身为Tesla云游戏加速卡",
          time: "2019-5-24 14:45:33",
          reading: "5768",
          content: `<p>日前，硬件检测工具AIDA64的更新日志中出现了一款名为GeForece RTX T10-8的显卡，显示它基于TU102核心打造。
          一开始大家纷纷猜测这块显的真身是RTX 2080 Ti Super，但似乎事与愿违。</p>
          <p>科隆游戏展上，NVIDIA宣布GeForce Now云游戏的后台服务器集群将升级到RTX显卡，从而使得玩云游戏也能开启实时光追效果，北加州和德国可率先尝鲜。</p>`
        },
        {
          id: 4,
          title: "泰迦奥特曼时日无多，托雷基亚奥特曼的目的即将达成",
          time: "2019-5-24 15:45:5",
          reading: "1568",
          content: `<p>托雷基亚奥特曼自从在地球上遇到了泰迦奥特曼之后就跟泰迦奥特曼掐上了。很多人认为托雷基亚奥特曼就是玩玩，玩弄别人的内心而已。其实并不是这样，托雷基亚奥特曼有自己的目的，而且他的目的即将达成。</p>
          <p>在泰迦奥特曼跟怪兽暗夜毒牙交手之后，泰迦奥特曼再一次的获得了暗夜毒牙的戒指，也就说他又一次获得了怪兽的技能。虽然泰迦奥特曼会因此提升自己的力量，但是却有一个很大的危害。</p>
          <p>这个怪兽戒指中含有黑暗的力量，起初的时候泰迦奥特曼曾感受过这里面有很微弱的奥特曼的力量。其实这种力量就是托雷基亚奥特曼的力量，因为在这部作品中只有托雷基亚奥特曼一个黑暗奥特曼。
          既然戒指里的力量是奥特曼的力量，又有黑色所以一定是托雷基亚奥特曼动了手脚。</p>`
        }
      ],
      slide1: [
        {
          msrc: "/src/picture/picture_02.jpg",
          w: 600,
          h: 400
        },
        {
          msrc: "/src/picture/picture_04.jpg",
          w: 600,
          h: 400
        },
        {
          msrc: "/src/picture/picture_06.jpg",
          w: 600,
          h: 400
        },
        {
          msrc: "/src/picture/picture_08.jpg",
          w: 600,
          h: 400
        },
        {
          msrc: "/src/picture/picture_03.jpg",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.getPhotosInfoId();
  },
  methods: {
    getPhotosInfoId() {
      console.log(this.id);
    },
    handleClose() {
      console.log("close event");
    }
  },
  components: {
    comment: Comment
  }
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.photosInfo-container {
  margin: 0;
  padding: 7px;
}
/* 标题 */
.photosInfo-container .photosInfo-title {
  font-size: 16px;
  text-align: center;
}
/* 缩略图 */
/* .photosInfo-container .pic-list figure {
  margin: 0;
}
.photosInfo-container .pic-list img{
  width: 200px;
  height: 70px;
} */
/* 文本内容 */
.photosInfo-container p {
  font-size: 13px;
  color: #007aff;
  display: flex;
  justify-content: space-between;
}
.photosInfo-container .photosInfo-content {
  margin: 10px 0;
  font-size: 14px;
  text-indent: 2em;
}
</style>