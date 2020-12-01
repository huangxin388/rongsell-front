<template>
  <div class="cart-container">
    <div class="cart-header-area">
      <div class="cart-logo"><img src="../assets/logo2.png" /></div>
      <div>购物车</div>
      <div class="search-bar"></div>
    </div>
    <div class="cart-body-area">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部商品" name="allProduct">
          <div class="cart-top-panel">
            <div class="cart-panel-item row-item check-all">
              <el-checkbox v-model="checked">全选</el-checkbox>
            </div>
            <div class="cart-panel-item row-item product-info">商品信息</div>
            <div class="cart-panel-item row-item">单价</div>
            <div class="cart-panel-item row-item">数量</div>
            <div class="cart-panel-item row-item">金额</div>
            <div class="cart-panel-item row-item">操作</div>
          </div>
          <div class="cart-item-container" v-for="item in cartProductList" :key="item.id">
            <div>店铺</div>
            <div class="cart-item">
              <div class="cart-product-item row-item">
                <div class="item-img">
                  <el-checkbox v-model="isChecked" style="margin-left:10px;"/>
                  <img :src="imageHost + item.productMainImage" />
                </div>
              </div>
              <div class="cart-product-item row-item product-info">
                <div id="cart-product-name">{{item.productName}}</div>
                <div id="cart-product-desc">
                  <div>净含量:450g</div>
                  <div id="info-edit">修改</div>
                </div>
              </div>
              <div class="cart-product-item row-item">
                <div style="display:inline-block;">
                  <div class="price">
                    <div class="old-price"><span>￥</span><span>{{item.productPrice}}</span></div>
                    <div class="current-price"><span>￥</span><span>{{item.productPrice}}</span></div>
                  </div>
                  <div class="decrease-price">卖家降价</div>
                </div>
              </div>
              <div class="cart-product-item row-item">
                <span class="input-number">
                  <div class="input-btn" @click="countDecrease(item)">-</div>
                  <input class="input-input" v-model="item.quantity" />
                  <div class="input-btn" @click="countIncrease(item)">+</div>
                </span>
              </div>
              <div class="cart-product-item row-item">
                <div class="total-price">
                  <span>￥</span><span>{{item.productTotalPrice}}</span>
                </div>
              </div>
              <div class="cart-product-item row-item">
                <div>移入收藏夹</div>
                <div>删除</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="降价商品" name="second">降价商品</el-tab-pane>
        <el-tab-pane label="库存紧张" name="third">库存紧张</el-tab-pane>
      </el-tabs>
      <div class="statement-area">
        <div class="statement-left">
          <ul>
            <li><el-checkbox v-model="checked" style="margin-left:10px;">全选</el-checkbox></li>
            <li>删除</li>
            <li>清除失效宝贝</li>
            <li>移入收藏夹</li>
            <li>分享</li>
          </ul>
        </div>
        <div class="statement-right">
          <ul>
            <li><span>已选商品</span><span id="statement-total-count">7</span><span>件</span></li>
            <li><span>合计(不含运费):</span><span id="cart-total-price-unit">￥</span><span id="cart-total-price">{{ cartTotalPrice }}</span></li>
            <li><div id="statement-btn">结算</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .cart-header-area {
    width: 80%;
    padding: 20px 0 40px 0;
    border: 1px solid red;
    margin: 0 auto;
  }
  .cart-logo {
    float: left;
  }
  .cart-logo img{
    height: 45px;
  }
  .search-bar {
    float: right;
  }
  .search-bar:after {
    clear: both;
    content: '';
  }
  .cart-body-area {
    width: 80%;
    margin: 0 auto;
  }
  .cart-top-panel {
    display: flex;
    padding: 0 0 0 20px;
  }
  .row-item {
    flex: 0 0 11%;
  }
  .cart-panel-item {
    line-height: 50px;
    color: #3c3c3c;
  }
  .product-info {
    flex-grow: 1;
    display: flex;
  }
  .cart-item {
    display: flex;
    padding: 16px 0 30px 20px;
    border: 1px solid #cccccc;
  }
  .check-all {
    /*padding-left: 20px;*/
  }
  .item-img {
    display: flex;
  }
  .item-img img {
    width: 60%;
    margin-left: 12px;
  }
  #cart-product-name {
    flex: 0 0 40%;
    color: #3c3c3c;
    font-size: 12px;
    margin-right: 30px;
  }
  #cart-product-desc {
    flex: 0 0 40%;
    color: #9c9c9c;
    margin: -16px 5px -16px 15px;
    border: 1px dashed white;
    position: relative;
  }
  #cart-product-desc:hover {
    border: 1px dashed #f40;
  }
  #cart-product-desc:hover #info-edit {
    display: block;
  }
  #cart-product-desc div {
    margin: 16px 5px 0 15px;
  }
  #info-edit {
    display: none;
    color: white;
    position: absolute;
    right: -6px;
    top: -17px;
    background: #f40;
    padding: 3px 5px;
    cursor: pointer;
  }
  .price {
    background: #f5f5f5;
    padding: 6px 12px 6px 12px;
  }
  .old-price {
    color: #9c9c9c;
    text-decoration: line-through;
  }
  .current-price span {
    color: #3c3c3c;
    font-size: 12px;
    font-weight: bold;
  }
  .decrease-price {
    background: #1dc2b4;
    border: 1px solid #1dc2b4;
    color: white;
    padding: 6px 12px 6px 12px;
  }
  .total-price span {
    font-family: Verdana,Tahoma,arial;
    color: #f40;
    font-weight: bold;
  }
  .input-number {
    display: flex;
  }
  .input-btn {
    height: 23px;
    width: 17px;
    background: #f0f0f0;
    border: 1px solid #e5e5e5;
    color: #444;
    line-height: 23px;
    text-align: center;
    cursor: pointer;
  }
  .input-btn:hover {
    border: 1px solid #f40;
    color: #f40;
  }
  .input-input {
    width: 39px;
    border: 1px solid #aaaaaa;
    text-align: center;
  }
  .statement-area {
    height: 50px;
    background: #e5e5e5;
    margin-top: 20px;
  }
  .statement-left {
    float: left;
    line-height: 50px;
  }
  .statement-left ul li {
    float: left;
    cursor: pointer;
    color: #3c3c3c;
  }
  .statement-right {
    float: right;
    line-height: 50px;
  }
  .statement-right ul li {
    float: left;
    cursor: pointer;
    color: #3c3c3c;
  }
  .statement-right:after {
    clear: both;
    content: '';
  }
  #statement-btn {
    background: #f40;
    height: 50px;
    width: 120px;
    color: white;
    text-align: center;
    font-size: 20px;
    border-radius: 2px;
  }
  #cart-total-price-unit {
    color: #f40;
    font-size: 14px;
  }
  #cart-total-price {
    color: #f40;
    font-size: 22px;
    font-weight: bold;
  }
  #statement-total-count {
    color: #f40;
    font-weight: bold;
    font-size: 18px;
  }
</style>
<script>
import api from '../api/cart'
export default {
  mounted () {
    if (this.$store.state.user.isLogin === true) {
      this.getCartInfo()
    }
  },
  data () {
    return {
      test: 1,
      activeName: 'allProduct',
      checked: false,
      num: 1,
      cartProductList: [
        { id: '001', name: '猫胡子自然清香30颗进口原料洗衣凝珠香水味浓缩洗衣液家庭实惠装', price: '23.80', count: '1', totalPrice: '23.80', checked: true },
        { id: '002', name: '猫胡子自然清香30颗进口原料洗衣凝珠香水味浓缩洗衣液家庭实惠装', price: '23.80', count: '1', totalPrice: '23.80', checked: false },
        { id: '003', name: '猫胡子自然清香30颗进口原料洗衣凝珠香水味浓缩洗衣液家庭实惠装', price: '23.80', count: '1', totalPrice: '23.80', checked: true },
        { id: '004', name: '猫胡子自然清香30颗进口原料洗衣凝珠香水味浓缩洗衣液家庭实惠装', price: '23.80', count: '1', totalPrice: '23.80', checked: true },
        { id: '005', name: '猫胡子自然清香30颗进口原料洗衣凝珠香水味浓缩洗衣液家庭实惠装', price: '23.80', count: '1', totalPrice: '23.80', checked: false }
      ],
      allChecked: false,
      cartTotalPrice: 0,
      imageHost: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleChange (value) {
      console.log(value)
    },
    countDecrease (item) {
      if (item.quantity > 1) {
        item.quantity--
      }
    },
    countIncrease (item) {
      item.quantity++
    },
    isChecked () {
      return this.test !== 0
    },
    getCartInfo () {
      api.getCartInfo().then(res => {
        if (res.data.code === 0) {
          console.log(res.data)
          this.allChecked = res.data.data.allChecked
          this.cartTotalPrice = res.data.data.cartTotalPrice
          this.imageHost = res.data.data.imageHost
          this.cartProductList = res.data.data.cartProductVoList
        }
      })
    }
  }
}
</script>
