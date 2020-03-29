<template>
  <div class="header-container">
    <div class="header-main-area">
      <div class="header-left-side">
        <ul>
          <li>地区</li>
          <li>用户名</li>
          <li>消息</li>
          <li>手机逛淘宝</li>
        </ul>
      </div>
      <div class="header-right-side">
        <ul>
          <li>我的淘宝</li>
          <li>购物车</li>
          <li>收藏夹</li>
          <li>商品分类</li>
          <li>千牛卖家中心</li>
          <li>联系客服</li>
          <li>网站导航</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header-container {
    width: 100%;
    height: 35px;
    background: #f5f5f5;
    border-bottom: 1px solid #eee;
  }
  .header-main-area {
    width: 80%;
    margin: 0 auto;
  }
  ul {
    height: 100%;
    line-height: 35px;
  }
  ul li {
    float: left;
    height: 100%;
    margin: 0 20px;
  }
  .header-left-side {
    float: left;
  }
  .header-right-side {
    float: right;
  }
</style>
