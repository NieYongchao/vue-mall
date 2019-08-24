<template>
  <div class="comment-container">
    <h3>评论区</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容:" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button><br>

    <!-- 评论列表 -->
    <ul class="comment-list">
      <li class="item">
        <p class="item-title" style="background-color:#ccc">花开花落&nbsp;&nbsp;第1楼&nbsp;&nbsp;发表于2019-05-25 14:22:33</p>
        <p class="item-info">厉害了</p>
      </li>
      <li class="item">
        <p class="item-title" style="background-color:#ccc">匿名用户&nbsp;&nbsp;第2楼&nbsp;&nbsp;发表于2019-05-25 14:22:33</p>
        <p class="item-info">楼上是sb</p>
      </li>
      <li class="item">
        <p class="item-title" style="background-color:#ccc">闲庭信步&nbsp;&nbsp;第3楼&nbsp;&nbsp;发表于2019-05-25 14:22:33</p>
        <p class="item-info">可以可以</p>
      </li>
      <li class="item">
        <p class="item-title" style="background-color:#ccc">兰草&nbsp;&nbsp;第4楼&nbsp;&nbsp;发表于2019-05-25 14:22:33</p>
        <p class="item-info">划重点</p>
      </li>
    </ul>

    <mt-button type="primary" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  
}
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