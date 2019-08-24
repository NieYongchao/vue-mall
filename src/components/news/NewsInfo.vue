<template>
  <div class="newsInfo-container">
    <!-- 头部信息区 -->
    <div>
      <p class="title">{{newsList[0].title}}</p>
      <p class="subInfo">
        <span>来源:{{newsList[0].author}}</span>
        <span>发表时间:{{newsList[0].time}}</span>
      </p>
    </div>
    <hr />
    <!-- 文本内容区 -->
    <div class="content" v-html="newsList[0].content"></div>
    <!-- 评论区 -->
    <comment></comment>
  </div>
</template>

<script>
import Comment from '../subcomponents/Comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsList: [
        {
          id: 1,
          img_url:
            "https://www.henan100.com/d/file/news/zz/20190823/67a501748bfe93280f1465220461ae97.jpg",
          title: "马云夜访的郑州德化街现在长啥样?亚细亚等多家商业体正改造升级 ",
          author: "河南商报",
          time: "2019-05-25 12:35:20",
          content: `<p>夜逛二七德化、吃网红烤串，尝新密虾尾……昨日，郑州被马云来郑的消息刷屏了。</p><p>之前，马云已经有6次造访郑州，
          但能让郑州市民朋友圈疯狂转载、毫不可惜私域流量的，当属第七次。</p><p>马云夜访德化刷屏余热持续</p><p>8月23日一大早，德化街各家
          商铺工作人员最热衷讨论的话题，非“马云来了”莫属。</p><p>据悉，8月21日晚，马云一行来到郑州的地标建筑二七塔与德化街，被市
          民“街拍”。8月22日夜里，马云来到郑东新区一家网红烧烤店，点了特色烧烤，包括独具特色的新密虾尾，共花费700元，并用支
          付宝支付。</p><p>也就是说，在马云的这次“行程单”里，有着郑州地标建筑二七塔，有着引领过全国商战的郑州商业标志街道德化街，
          还有郑州吃货们喜欢的网红烧烤和新密虾尾。</p><p>夜逛二七德化、吃网红烤串，尝新密虾尾……昨日，郑州被马云来郑的消息刷屏了。</p><p>之前，马云已经有6次造访郑州，
          但能让郑州市民朋友圈疯狂转载、毫不可惜私域流量的，当属第七次。</p><p>马云夜访德化刷屏余热持续</p><p>8月23日一大早，德化街各家
          商铺工作人员最热衷讨论的话题，非“马云来了”莫属。</p><p>据悉，8月21日晚，马云一行来到郑州的地标建筑二七塔与德化街，被市
          民“街拍”。8月22日夜里，马云来到郑东新区一家网红烧烤店，点了特色烧烤，包括独具特色的新密虾尾，共花费700元，并用支
          付宝支付。</p><p>也就是说，在马云的这次“行程单”里，有着郑州地标建筑二七塔，有着引领过全国商战的郑州商业标志街道德化街，
          还有郑州吃货们喜欢的网红烧烤和新密虾尾。</p>`
        },
      ]
    };
  },
  methods: {
    getNewsInfo() {}
  },
  components: { 
    "comment": Comment //评论子组件
  }
};
</script>

<style scoped>
.newsInfo-container {
  padding: 0 6px;
  margin-bottom: 60px;
}
.newsInfo-container p {
  margin-bottom: 0;
}
.newsInfo-container .title {
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
  padding-top: 4px;
  margin-bottom: 2px;
}
.newsInfo-container .subInfo {
  font-size: 13px;
  color: rgb(52, 174, 231);
  display: flex;
  justify-content: space-between;
}
.newsInfo-container .content {
  font-size: 14px;
  color: rgb(110, 108, 108);
}
</style>>
