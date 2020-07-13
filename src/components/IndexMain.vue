<template>
  <div class="index-main-container">
    <div>
      <div class="adv-area">广告区域</div>
      <div class="search-area">
        <div class="search-container">
          <div class="adv">
            <img src="../assets/advertisement.gif" style="margin-top:-24px"/>
          </div>
          <div class="search-module">
            <div class="search-tab">
              宝贝 天猫 店铺
            </div>
            <div class="search-input">
              <div class="search-input-main">
                <el-input
                  placeholder="潘多拉海洋之心项链"
                  prefix-icon="el-icon-search">
                </el-input>
              </div>
              <el-button class="search-input-button">搜索</el-button>
            </div>
            <div class="search-hot">
              <ul>
                <li>新款连衣裙</li>
                <li>四件套</li>
                <li>潮流T恤</li>
                <li>时尚女鞋</li>
                <li>短裤</li>
                <li>半身裙</li>
                <li>男士外套</li>
                <li>墙纸</li>
                <li>行车记录仪</li>
                <li>新款男鞋</li>
                <li>耳机</li>
                <li>时尚女包</li>
                <li>沙发</li>
              </ul>
            </div>
          </div>
          <div class="phone-qr">
          </div>
        </div>
      </div>
    </div>
    <div class="index-middle-container">
      <div class="show-area">
        <div class="left-category-area">
          <h2 class="scheme">主题市场</h2>
          <div class="category-list">
            <ul v-for="item in firstLevelCategoryList" :key="item.id">
              <li>
                <div class="category-item">{{ item.name }}</div>
                <i class="el-icon-arrow-right" style="line-height: 32px"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="middle-show-area">
          <div class="show-area-top">
            <div class="top-carousel">
              <el-carousel trigger="click" height="280px">
                <el-carousel-item>
                  <img src="../assets/carousel1.webp" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/carousel2.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/carousel3.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/carousel4.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/carousel5.webp" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="right-carousel" style="margin-left: 10px">
              <img src="../assets/top-adv.webp">
            </div>
          </div>
          <div class="show-area-middle">
            <img src="../assets/mall.png" />
          </div>
          <div class="show-area-bottom">
            <div class="bottom-carousel">
              <el-carousel trigger="click" height="200px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="right-carousel" style="margin-left: 10px">
              <img src="../assets/bottom-adv.jpg">
            </div>
          </div>
      </div>
        <div class="right-user-info"></div>
      </div>
      <div class="product-list product-list-hot">
        <div class="product-list-title">
          <div class="title-before"></div>
          <h3 class="product-title">热卖单品</h3>
        </div>
        <div class="product-area" v-for="item in productList" :key="item.id" @click="toProductDetail(item.id)">
          <div class="product">
            <div class="img-container">
              <img :src="item.imageHost + item.mainImage"/>
              <!--            <img src="../assets/xie.webp"/>-->
            </div>
            <p class="product-name"><span><img src="../assets/baoyou.png"/> </span>{{item.title}}</p>
            <div>
              <span class="product-comment">评价 143</span>
              <span class="product-collection">收藏 5566</span>
            </div>
            <div>
              <span class="price-unit">￥</span>
              <span class="current-price">{{item.price}}</span>
              <span class="outdate-price-unit">￥</span>
              <span class="outdate-price">1200</span>
              <span class="sell">月销101笔</span>
            </div>
          </div>
        </div>
      </div>
      <!--清除浮动-->
      <div style="clear: both;"></div>
      <div class="product-list product-list-favor">
        <div class="product-list-title">
          <div class="title-before"></div>
          <h3 class="product-title">猜你喜欢</h3>
        </div>
        <div class="product-area product-favor-area" v-for="item in productList" :key="item.id">
          <div class="product">
            <img src="../assets/xie.webp"/>
            <p class="product-name"><span><img src="../assets/baoyou.png" style="width: 28px;"/> </span>{{item.name}}</p>
            <div class="product-info">
              <span class="price-unit">￥</span>
              <span class="current-price">{{item.price}}</span>
              <span class="sell">销量:3</span>
            </div>
          </div>
          <div class="find-relative-area">
            <div id="find-relative-word">
              <span></span>
              <span>找相似</span>
            </div>
            <div id="find-relative-desc">
              <span>发现更多相似的宝贝</span>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .index-main-container {
    background: #f4f4f4;
  }
  .index-middle-container {
    width: 80%;
    margin: 0 auto;
    background: #FFFFFF;
  }
  .product-list {
    width: 100%;
  }
  .product-area {
    width: 19.8%;
    float: left;
    border: 1px solid white;
  }
  .product-area:hover {
    border: 1px solid red;
    position: relative;
  }
  .product-area:hover .find-relative-area {
    display: block;
  }
  .product {
    margin: 8%;
  }
  .product img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .product-name {
    /*line-height: 20px;*/
    height: 40px;
    margin: 8px 0;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
  }
  .product-name img{
    max-height: 16px;
    width: 28px;
  }
  .product-comment {
    color: #999;
    margin-right: 10px;
    cursor: pointer;
  }
  .product-collection {
    color: #999;
    margin-right: 10px;
    cursor: pointer;
  }
  .price-unit {
    color: #ff5000;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }
  .current-price {
    color: #ff5000;
    font-size: 22px;
    margin-left: 2px;
    line-height: 22px;
    font-weight: 400;
    cursor: pointer;
  }
  .outdate-price-unit {
    color: #999;
    text-decoration: line-through;
    cursor: pointer;
  }
  .outdate-price {
    color: #999;
    text-decoration: line-through;
    line-height: 22px;
    cursor: pointer;
  }
  .outdate-price:hover {
    text-decoration: none;
  }
  .outdate-price-unit {
    text-decoration: none;
  }
  .sell {
    color: #999;
    float: right;
    cursor: pointer;
  }
  .product-list-title {
    height: 22px;
    line-height: 22px;
    color: #FF5500;
    margin: 17px 18px;
  }
  .title-before {
    float: left;
    width: 4px;
    height: 16px;
    margin-right: 7px;
    background: linear-gradient(to bottom, #ff7436, #ff0000);
    top: 4px;
  }
  .product-title {
    font-size: 20px;
    font-weight: bold;
  }
  .find-relative-area {
    background: #FF5000;
    width: 100%;
    height: 24%;
    cursor: pointer;
    text-align: center;
    position: absolute;
    bottom: 0;
    display: none;
  }
  #find-relative-word {
    font-size: 18px;
    line-height: 32px;
    margin-top: 15px;
    text-align: center;
    color: white;
  }
  #find-relative-desc {
    line-height: 22px;
    font-size: 12px;
    color: white;
    text-align: center;
    border-top: 1px solid white;
    display: inline;
    margin: 0 auto;
  }
  .product-info {
    margin-top: 22px;
    line-height: 24px;
  }
  .product-favor-area {
    position: relative;
  }
  .img-container {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 100%;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  .adv-area {
    background: #ffc112;
    height: 100px;
  }
  .search-area {
    background-color: #FFF;
    padding-top: 24px;
    height: 130px;
  }
  .search-container {
    width: 80%;
    margin: 0 auto;
    height: 97px;
    display: flex;
    flex-direction: row;
  }
  .adv {
    flex: 0 0 20%;
  }
  .search-module {
    flex: 0 0 55%;
  }
  .phone-qr {
    flex: 0 0 25%;
  }
  .search-tab {
    margin-left: 17px;
    height: 22px;
  }
  .search-input {
    height: 40px;
  }
  .search-hot {
    padding: 5px 41px 0 0;
  }
  .search-hot ul li {
    float: left;
    margin: 0 4px;
    cursor: pointer;
  }
  .search-hot ul li:hover {
    color: #ff5000;
  }
  .search-input-main {
    /*margin-right: 74px;*/
    border: 2px solid #ff5000;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: none;
    overflow: hidden;
    height: 36px;
    width: 90%;
    float: left;
  }
  .search-input-button {
    float: left;
    width: 9.5%;
    font-size: 18px;
    font-weight: 700;
    color: #FFF;
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    cursor: pointer;
    height: 40px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    /*width: 100%;*/
  }
  .show-area {
    border: 1px solid red;
    display: flex;
  }
  .left-category-area {
    width: 16%;
    border: 1px solid red;
  }
  .middle-show-area {
    border: 1px solid black;
    flex: 1 0 auto;
    padding: 10px;
  }
  .right-user-info {
    width: 24.4%;
    border: 1px solid blue;
  }
  .category-list {
    background: #FFFFFF;
  }
  .category-list ul li {
    height: 32px;
    color: #666666;
    padding: 0 20px;
    display: flex;
  }
  .category-item {
    margin: 0 auto;
    height: 32px;
    width: 100%;
    line-height: 32px;
    text-align: center;
    color: #3C3C3C;
  }
  .category-item:hover {
    color: #FF4400;
  }
  .scheme {
    text-align: center;
    font-size: 16px;
    background: #ff5000;
    height: 30px;
    line-height: 30px;
    color: #FFFFFF;
  }
  .show-area-top {
    display: flex;
  }
  .show-area-middle {
    margin-top: 20px;
  }
  .show-area-bottom {
    display: flex;
  }
  .top-carousel {
    flex-grow: 1;
  }
  .bottom-carousel {
    flex-grow: 1;
  }

  .top-carousel {
    /*width: 200px;*/
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<script>
import api from '@/api/product'
import skuApi from '@/api/sku'
import categoryApi from '@/api/category.js'
export default {
  data () {
    return {
      productList: [
        { id: '001', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '002', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '003', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '004', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '005', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '006', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '007', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '008', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '009', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' },
        { id: '010', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', categoryId: '100032', subTitle: 'NOVA青春版1999元', mainImage: '', price: '' }
      ],
      firstLevelCategoryList: []
    }
  },
  created () {
    this.getProductList()
    this.getFirstLevelCategory()
  },
  methods: {
    toProductDetail (id) {
      this.$router.push({ name: 'productDetail', paramSelections: { id: id } })
    },
    getProductList () {
      const params = {
        keyword: '',
        pageNum: '1',
        pageSize: '10'
      }
      skuApi.getSkuList(params).then(res => {
        const data = res.data
        if (data.code === 0) {
          this.productList = data.data.list
        }
      })
    },
    getFirstLevelCategory () {
      const params = {
        parentId: 0
      }
      categoryApi.getParallelChildrenCategory(params).then(res => {
        if (res.data.code === 0) {
          this.firstLevelCategoryList = res.data.data
        }
      })
    }
  }
}
</script>
