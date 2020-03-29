<template>
  <div class="index-main-container">
    <div class="product-list-area">
      <div class="product-area" v-for="item in productList" :key="item.id">
        <div class="product">
          <img :src="item.img"/>
          <p class="product-name"><span><img src="../assets/baoyou.png" style="width: 28px;"/> </span>{{item.name}}</p>
          <div>
            <span class="product-comment">评价143</span>
            <span class="product-collection">收藏5566</span>
          </div>
          <div>
            <span>￥903</span>
            <span>￥1200</span>
            <span>月销101笔</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .index-main-container {
    width: 80%;
    margin: 0 auto;
  }
  .product-list-area {
    width: 100%;
  }
  .product-area {
    width: 19.8%;
    float: left;
    border: 1px solid white;
  }
  .product-area:hover {
    border: 1px solid red;
  }
  .product {
    margin: 6%;
  }
  .product img {
    width: 100%;
  }
  .product-name {
    line-height: 20px;
    margin: 8px 0;
    color: #666;
    font-size: 14px;
  }
  .product-comment {
    color: #999;
    margin-right: 10px;
  }
  .product-collection {
    color: #999;
    margin-right: 10px;
  }
</style>
<script>
export default {
  data () {
    return {
      productList: [
        { id: '001', name: '白鞋男鞋夏季透气软底白色休闲平板鞋薄底薄款百搭浅口小白鞋男土', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '002', name: 'CANADA GOOSE / 加拿大鹅 Fusion Fit 版Ros', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '002', name: '菠菜', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '002', name: '菠菜', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '002', name: '菠菜', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' }
      ]
    }
  }
}
</script>
