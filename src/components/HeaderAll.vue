<template>
  <div class="header-container">
    <div class="header-main-area">
      <div class="header-left-side">
        <ul>
          <li class="selector">
            <router-link to="#" class="link region">地区</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
          </li>
          <li class="please-login" v-show="showLogin"><router-link to="/login" class="link login-link">亲，请登录</router-link></li>
          <li class="selector username-selector" v-show="!showLogin">
            <div class="list-parent">
              <span id="login-username">{{ $store.state.user.userName }}</span>
              <span class="iconfont icon-arrow">&#xe637;</span>
              <div class="list-down user-layout">
                <div class="list-content-top">
                  <span id="account-manage">账号管理</span>
                  <span id="top-divider"></span>
                  <span id="account-exit" @click="logout">退出</span>
                </div>
                <div class="list-content-middle">
                  <div class="avatar-area">
                    <img src="../assets/xie.webp" id="list-avatar">
                  </div>
                  <div>
                    <div style="margin-right: 90px">
                      <p>魅力值:491</p>
                      <p>普通会员</p>
                    </div>
                  </div>
                </div>
                <div class="list-content-bottom">查看你的专属权益</div>
              </div>
            </div>
          </li>
          <li>
            <router-link to="#" class="link">消息</router-link>
          </li>
          <li>
            <router-link to="/managePage/category" class="link">控制台</router-link>
          </li>
        </ul>
      </div>
      <div class="header-right-side">
        <ul>
          <li><router-link to="/index" class="link">海淘网首页</router-link></li>
          <li class="selector cart-selector">
            <span class="iconfont icon-cart">&#xe62d;</span>
            <router-link to="/index/cart" class="link">购物车</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
            <div class="list-down cart-layout">
              <p id="recent-add">最近加入的宝贝:</p>
              <div class="cart-container">
                <div class="cart-item" v-for="(item, index) in cartList" :key="index">
                  <img :src="imageHost + item.productMainImage" />
                  <div class="cart-content-middle">
                    <p class="cart-item-name">{{ item.productName }}</p>
                    <p class="cart-item-info">净含量:450g</p>
                  </div>
                  <div>
                    <p class="cart-item-price"><span class="item-unit">￥</span><span class="item-price">{{ item.productPrice }}</span></p>
                    <p class="cart-item-delete">删除</p>
                  </div>
                </div>
              </div>
              <p id="cart-item-count" v-show="showRemain">购物车里还有{{ remainCount }}件宝贝</p>
              <div class="btn-to-cart">
                <router-link to="/index/cart" class="link" style="color: #ffffff">查看我的购物车</router-link>
              </div>
            </div>
          </li>
          <li class="selector">
            <span class="iconfont icon-collection">&#xe60e;</span>
            <router-link to="#" class="link collection-text">收藏夹</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
          </li>
          <li><router-link to="#" class="link">商品分类</router-link></li>
          <li class="selector">
            <router-link to="#" class="link seller-center">千牛卖家中心</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
          </li>
          <li class="selector">
            <router-link to="#" class="link customer-service">联系客服</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
          </li>
          <li class="selector">
            <span class="iconfont icon-navigation">&#xe605;</span>
            <router-link to="#" class="link">网站导航</router-link>
            <span class="iconfont icon-arrow">&#xe637;</span>
          </li>
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
    padding: 0 5px 0 0;
    margin: 0 15px;
  }
  .header-left-side {
    float: left;
  }
  .header-right-side {
    float: right;
  }
  .link {
    text-decoration: none;
    color: #6c6c6c;
    font-size: 12px;
  }
  .link:hover {
    color: #f22e00;
  }
  .icon-collection {
    font-size: 12px;
    margin: 0 6px;
    color: #6c6c6c;
  }
  .region {
    padding-left: 5px;
  }
  #login-username {
    padding-left: 5px;
    display: inline-block;
    text-align: center;
    width: 100px;
  }
  .seller-center {
    padding-left: 5px;
  }
  .customer-service {
    padding-left: 5px;
  }
  .collection-text:hover {
    color: #f22e00;
  }
  .collection-text:hover .icon-collection{
    color: #f22e00;
  }
  .icon-collection:hover .collection-text {
    color: #f22e00;
  }
  #login-username:hover {
    color: #f22e00;
  }
  .login-link {
    color: #f22e00;
  }
  .selector:hover {
    background: white;
  }
  .list-down {
    position: absolute;
    background: white;
    padding: 10px;
    display: none;
    z-index: 1000;
  }
  .list-content-top {
    text-align: right;
  }
  #top-divider {
    /*border-left: 1px solid red;*/
    margin: 0 12px;
    width: 2px;
    height: 12px;
    background: #eee;
    display: inline-block;
  }
  #account-manage {
    cursor: pointer;
  }
  #account-manage:hover {
    color: #f22e00;
  }
  #account-exit {
    cursor: pointer;
  }
  #account-exit:hover {
    color: #f22e00;
  }
  .list-content-middle {
    display: flex;
    margin-bottom: 10px;
  }
  .list-content-bottom {
    border: 1px solid #FFE8DE;
    background: #FFF0E8;
    text-align: center;
    cursor: pointer;
    line-height: 14px;
    padding: 4px 0;
  }
  .list-content-bottom:hover {
    color: #f22e00;
  }
  .avatar-area {
    display: flex;
    margin: 0 25px;
  }
  #list-avatar {
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
  .please-login {
    color: #f22e00;
  }
  .username-selector:hover .user-layout {
    display: block;
  }
  .icon-cart {
    font-size: 14px;
    color: #f22e00;
    margin: 0 6px;
  }
  .icon-navigation {
    font-size: 14px;
    color: #f22e00;
    margin: 0 6px;
  }
  .icon-arrow {
    font-size: 2px;
    margin-left: 8px;
    color: #3C3C3C;
  }
  .cart-item {
    display: flex;
    margin-bottom: 10px;
  }
  .cart-item img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    cursor: pointer;
  }
  p {
    line-height: 30px;
  }
  .cart-item-name {
    overflow: hidden;
    width: 170px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
    cursor: pointer;
  }
  .cart-item-name:hover {
    color: #ff4400;
  }
  .cart-container {
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 10px;
  }
  .cart-content-middle {
    margin-right: 60px;
  }
  #recent-add {
    font-weight: bold;
    color: #3C3C3C;
    padding: 10px 0;
  }
  #cart-item-count {
    font-weight: bold;
    color: #3C3C3C;
    /*margin-top: 10px;*/
    text-align: right;
  }
  .cart-item-info {
    color: #9c9c9c;
  }
  .cart-item-price {
    text-align: right;
  }
  .cart-item-price span {
    color: #f22e00;
    font-weight: bold;
  }
  .cart-item-delete {
    text-align: right;
    cursor: pointer;
  }
  .cart-item-delete:hover {
    color: #ff4400;
  }
  .btn-to-cart {
    float: right;
    background: #ff4400;
    color: #ffffff;
    padding: 0 10px;
    border-radius: 2px;
    line-height: 25px;
    cursor: pointer;
  }
  .cart-selector:hover .cart-layout {
    display: block;
  }
</style>
<script>
import api from '../api/user'
import cart from '../api/cart'
export default {
  mounted () {
    if (this.$store.state.user.isLogin === true) {
      this.showLogin = false
      this.getCartInfo()
    } else {
      this.showLogin = true
    }
  },
  data () {
    return {
      userName: '',
      size: 'large',
      image: require('@/assets/bocai.png'),
      showLogin: true,
      showRemain: true, // 是否展示购物车中还有几个商品
      remainCount: 0,
      cartList: [],
      allChecked: false,
      cartTotalPrice: 0,
      imageHost: ''
    }
  },
  methods: {
    logout () {
      console.log('点击了退出按钮')
      api.logout().then(res => {
        console.log('logout')
        console.log(res)
        if (res.data.code === 0) {
          this.showLogin = true
          console.log('退出成功')
        }
      }).catch(res => {
        // this.$message.info('退出失败')
      })
    },
    getCartInfo () {
      cart.getCartInfo().then(res => {
        if (res.data.code === 0) {
          this.allChecked = res.data.data.allChecked
          this.cartTotalPrice = res.data.data.cartTotalPrice
          this.imageHost = res.data.data.imageHost
          if (res.data.data.cartProductVoList.length > 5) {
            this.cartList = res.data.data.cartProductVoList.slice(0, 5)
            this.showRemain = true
            this.remainCount = res.data.data.cartProductVoList.length - 5
          } else {
            this.cartList = res.data.data.cartProductVoList
            this.showRemain = false
          }
        }
      })
    }
  }
}
</script>
