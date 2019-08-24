<template>
  <div>
    <!-- 新闻列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>来源:{{item.author}}</span>
              <span>发表时间: {{item.time | dateFormat}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [], //若有后台数据用这个数组接收
      newsList: [
      {
        id: 1,
        img_url:
          "https://www.henan100.com/d/file/news/zz/20190823/67a501748bfe93280f1465220461ae97.jpg",
        title: "马云夜访的郑州德化街现在长啥样?亚细亚等多家商业体正改造升级 ",
        author: "河南商报",
        time: '2019-05-25 12:35:20'
      },
      {
        id: 2,
        img_url:
          "https://t11.baidu.com/it/u=583353724,3590685652&fm=173&app=49&f=JPEG?w=218&h=146&s=F03536D068637B07A0A31D410300E0B8",
        title: "阿里云创新中心落地赋能 阿里云创峰会聊城站举行 ",
        author: "齐鲁壹点",
        time: '2019-05-25 12:30:28'
      },
      {
        id: 3,
        img_url:
          "https://t12.baidu.com/it/u=617345801,4101407354&fm=173&app=49&f=JPEG?w=218&h=146&s=FA29A144517A0D94F6F7EB9A0300808F",
        title: "中！河南与阿里巴巴达成战略合作，中部崛起，真得劲儿！ ",
        author: "每日经济",
        time: '2019-05-25 12:28:44'
      },
      {
        id: 4,
        img_url:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2820334807,4062738828&fm=26&gp=0.jpg",
        title: "煤油再等等！快了，Flyme 8会有专场发布会 ",
        author: "东东网",
        time: '2019-05-25 12:27:22'
      },
      {
        id: 5,
        img_url:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1100546106,3967820891&fm=26&gp=0.jpg",
        title: "从复古到现代化！安卓10大换脸，采用新Logo ",
        author: "雷科技",
        time: '2019-05-25 12:24:56'
      }
      ]
    }
  },
  created () {
    // this.getNewsList();
  },
  methods: {
    // getNewsList () {
    //   this.$http.get('dizhi').then(result=>{
    //     if(result.body.status == 0) {
    //       this.list = result.body.message
    //     } else{
    //       console.log('获取信息失败。。。')
    //     }
    //   })
    // }
  }
};
</script>

<style scoped>
.mui-table-view h1 {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mui-table-view .mui-media-body .mui-ellipsis {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>