<template>
  <div class="comment-container">
    <h3>评论区</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容:" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
    <br />

    <!-- 评论列表 -->
    <ul class="comment-list">
      <li class="item" v-for="comment in commentList" :key="comment.time">
        <p
          class="item-title"
          style="background-color:#ccc"
        >{{comment.author}}&nbsp;&nbsp;第1楼&nbsp;&nbsp;发表于{{comment.time | dateFormat}}</p>
        <p class="item-info">{{comment.content}}</p>
      </li>
    </ul>

    <mt-button type="primary" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      msg: "", //用于发表评论
      commentList: [
        { author: "花开花落", time: "2019-05-25 14:22:6", content: "厉害了" },
        { author: "闲庭信步", time: "2019-05-25 14:21:54", content: "划重点" },
        {
          author: "匿名用户",
          time: "2019-05-25 14:21:38",
          content: "可以可以"
        },
        { author: "兰草", time: "2019-05-25 14:20:14", content: "4楼我的" }
      ]
    };
  },
  methods: {
    postComments() {
      // 判断评论是否为空
      if (this.msg.trim().length === 0) {
        Toast("您还没有想说的话吗。。。");
        return;
      }

      var mesObj = {
        author: "匿名用户",
        time: Date.now(),
        content: this.msg.trim()
      };

      this.commentList.unshift(mesObj);
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.comment-container h3 {
  font-size: 16px;
}
.comment-container textarea {
  height: 60px;
  padding: 3px 5px;
  font-size: 12px;
  margin: -3px 0 1px;
}
.comment-list {
  padding: 0;
  margin: 0;
}
.comment-list .item {
  list-style: none;
}
.comment-list .item .item-title {
  padding-left: 5px;
  font-size: 13px;
  color: #555;
  line-height: 30px;
}
.comment-list .item .item-info {
  font-size: 13px;
  color: rgb(110, 108, 108);
  line-height: 20px;
  text-indent: 2em;
}
</style>