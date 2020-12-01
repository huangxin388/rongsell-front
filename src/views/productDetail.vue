<template>
  <div>
    <div class="product-detail-header">
      <div class="detail-header-area">
        <ul>
          <li>logo</li>
          <li>店铺名称</li>
          <li>描述服务物流</li>
          <li>手机逛</li>
        </ul>
      </div>
    </div>
    <div class="shop-title-area">

    </div>
    <div class="shop-nav"></div>
    <div class="product-body">
      <div class="detail-main-area">
        <div class="product-image-area">
          <img :src="imageHost + mainImage"/>
          <ul>
            <li v-for="(item, index) in subImageList" :key="index" @mouseover="changeMainImage(item)"><img :src="imageHost + item" /></li>
<!--            <li><img src="../assets/xie.webp" /></li>-->
          </ul>
          <div class="image-bottom-area">
            <div id="collection-hot"><span>收藏商品(22236人气)</span></div>
            <div id="tip-off">举报</div>
          </div>
        </div>
        <div class="product-information-area">
          <div class="detail-title-area">
            <div id="detail-title">{{ name }}</div>
            <div id="detail-subtitle">{{ subTitle }}</div>
          </div>
          <div class="price-area">
            <div class="table-row"><div class="detail-left-item">价格</div><div><span>￥</span><span id="detail-old-price">89.00</span></div></div>
            <div class="table-row"><div class="detail-left-item"><span>促销价</span></div><div><span id="current-price-unit">￥</span><span id="detail-current-price">{{ price }}</span><span>夏季新款</span></div></div>
            <div class="table-row"><div class="detail-left-item"></div><div id="detail-preference">淘金币可抵扣商品价格3%</div></div>
          </div>
          <div class="postage-area">
            <div class="table-row">
              <div class="detail-left-item">运费</div>
              <div><span>广东广州</span><span>至</span><span>枣庄</span><span></span><span>运费:</span><span>0.00</span></div>
            </div>
            <div class="table-row">
              <div class="detail-left-item"></div>
              <div>店铺预付,付款后3天内发货</div>
            </div>
            <div class="shop-panel">
              <div><span class="panel-item">月销量</span><span id="month-sale">1398</span></div>
              <span class="panel-divider"></span>
              <div><span class="panel-item">累计评价</span><span id="total-comment">599</span></div>
              <span class="panel-divider"></span>
              <div><span class="panel-item">送天猫积分</span><span id="tm-score">134</span></div>
            </div>
            <div class="table-row">
              <div class="detail-left-item">尺码</div>
              <div></div>
            </div>
            <div class="table-row">
              <div class="detail-left-item">颜色分类</div>
              <div></div>
            </div>
            <div class="table-row">
              <div class="detail-left-item">数量</div>
              <div></div>
            </div>
            <div class="tokio-area">
              <div class="table-row">
                <div class="detail-left-item">花呗分期</div>
                <div></div>
              </div>
            </div>
            <div class="table-row">
              <div class="detail-left-item"></div>
              <div><el-button>立即购买</el-button><el-button>加入购物车</el-button></div>
            </div>
          </div>
        </div>
      </div>
      <div class="see-again">
        <div class="see-title"><span class="see-divider"></span><span id="see-title-txt">看了又看</span><span class="see-divider"></span></div>
        <ul>
          <li><img src="../assets/xie.webp" /></li>
          <li><img src="../assets/xie.webp" /></li>
          <li><img src="../assets/xie.webp" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .product-detail-header {
    border-bottom: 1px solid #c8baaa;
  }
  .detail-header-area {
    height: 86px;
    width: 80%;
    margin: 0 auto;
    border: 1px solid red;
  }
  .detail-header-area ul li {
    float: left;
  }
  .shop-title-area {
    height: 150px;
    border: 1px solid red;
    background: url("../assets/shop_bg.jpg") repeat center 0 #ccc;
    margin-bottom: 0;
  }
  .shop-nav {

  }
  .product-body {
    width: 77%;
    margin: 25px auto;
    border: 1px solid red;
    height: 900px;
  }
  .detail-main-area {
    width: 85%;
    border-right: 1px solid #F2F2F2;
    float: left;
    display: flex;
    flex-direction: row;
  }
  .see-again {
    height: 900px;
    width: 14%;
    float: right;
  }
  .see-title {
    margin: 5px 20px -10px 20px;
    display: flex;
    align-items: center;
  }
  #see-title-txt {
    margin: 0 10px;
  }
  .see-divider {
    flex-grow: 1;
    border: 0.5px dotted rgb(201, 201, 201);
  }
  .see-again ul li {
    width: 100%;
    display: flex;
    margin: 20px 0;
  }
  .see-again ul li img {
    width: 80%;
    margin: 0 auto;
  }
  .product-image-area {
    /*border: 1px solid red;*/
    width: 46%;
    /*float: left;*/
    text-align: center;
  }
  .product-image-area img {
    width: 93%;
    margin: 20px 0;
    display: inline;
    border: 1px solid #F2F2F2;
  }
  .product-information-area {
    /*width: 53%;*/
    border: 1px solid blue;
    /*float: left;*/
    flex-grow: 1;
  }
  .price-area {
    background: url("../assets/price_bg.png") no-repeat #e9e9e9;
    padding: 5px;
    margin-right: 20px;
  }
  .product-image-area ul {
    width: 85%;
    margin: 0 auto;
    display: flex;
    padding: 0 0;
    /*z-index: 1;*/
    /*overflow: hidden;*/
    /*overflow: auto;*/
    /*_height: 1%;*/
  }
  .product-image-area ul li {
    /*width: 15%;*/
    /*float: left;*/
    margin: 0 6px;
    cursor: pointer;
  }
  .product-image-area ul li img:hover {
    border: 2px solid black;
  }
  .product-image-area ul li img{
    border: 2px solid white;
    margin: 0;
    /*width: 20px;*/
  }
  .image-bottom-area {
    padding: 30px 40px 25px 40px;
    overflow: auto;
    _height: 1%;
    color: #999;
  }
  #collection-hot {
    float: left;
  }
  #tip-off {
    float: right;
  }
  .detail-title-area {
    padding: 20px 10px 12px 10px;
  }
  #detail-title {
    font-weight: 700;
    font-size: 16px;
  }
  #detail-subtitle {
    font-size: 14px;
    color: #FF0036;
  }
  .table-row {
    display: flex;
    /*border: 1px solid red;*/
  }
  .detail-left-item {
    flex: 0 0 13%;
    color: #999999;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .detail-left-item span {
    vertical-align: middle;
  }
  #detail-old-price {
    color: #333;
    text-decoration: line-through;
    font-size: 14px;
  }
  #current-price-unit {
    color: #FF0036;
    font-size: 18px;
  }
  #detail-current-price {
    color: #FF0036;
    font-size: 30px;
    font-weight: bold;
  }
  #detail-preference {
    color: #FF0036;
  }
  .postage-area {
    padding: 9px 5px;
    margin-right: 20px;
  }
  .shop-panel {
    padding: 10px 0;
    border-bottom: 1px dotted rgb(201, 201, 201);
    border-top: 1px dotted rgb(201, 201, 201);
    display: flex;
    justify-content: space-between;
  }
  .panel-divider {
    height: 18px;
    border: 0.5px solid rgb(201, 201, 201);
  }
  .shop-panel div {
    margin: 0 8%;
  }
  .panel-item {
    color: #999999;
    line-height: 16px;
  }
  #month-sale {
    color: #FF0036;
    margin-left: 3px;
    font-weight: bold;
  }
  #total-comment {
    color: #FF0036;
    margin-left: 3px;
    font-weight: bold;
  }
  #tm-score {
    color: #280;
    margin-left: 3px;
    font-weight: bold;
  }
</style>
<script>
import api from '@/api/spu'
export default {
  mounted () {
    console.log(this.$route.params.id)
    this.getProductInfo(this.$route.params.id)
  },
  data () {
    return {
      id: '',
      categoryId: '',
      detail: '',
      imageHost: '',
      mainImage: '',
      name: '',
      parentCategoryId: '',
      price: '',
      status: '',
      stock: '',
      subImages: '',
      subTitle: '',
      subImageList: []
    }
  },
  methods: {
    getProductInfo (id) {
      const params = {
        productId: id
      }
      api.getProductDetail(params).then(res => {
        if (res.data.code === 0) {
          this.id = res.data.data.id
          this.categoryId = res.data.data.categoryId
          this.detail = res.data.data.detail
          this.imageHost = res.data.data.imageHost
          this.mainImage = res.data.data.mainImage
          this.name = res.data.data.name
          this.parentCategoryId = res.data.data.parentCategoryId
          this.price = res.data.data.price
          this.stock = res.data.data.stock
          this.status = res.data.data.status
          this.subImages = res.data.data.subImages
          this.subTitle = res.data.data.subTitle
          this.subImageList = this.subImages.split(',')
        }
      })
    },
    changeMainImage (uri) {
      this.mainImage = uri
    }
  }
}
</script>
