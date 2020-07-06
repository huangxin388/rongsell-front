<template>
  <div style="background: #F7F8FA;">
    <HeaderAll></HeaderAll>
    <div class="manage-container">
<!--      <el-button class="iconfont" @click="collapse">&#xe605;</el-button>-->
      <div class="manage-main-area">
        <el-menu
          default-active="product"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          :collapse="false">
          <el-menu-item index="category">
            <i class="el-icon-menu"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="product">
            <i class="el-icon-shopping-bag-2"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-submenu index="1-3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">常用操作</span>
            </template>
            <el-menu-item index="1-4-1">已卖出的宝贝</el-menu-item>
            <el-menu-item index="1-4-2">评价管理</el-menu-item>
            <el-menu-item index="publishProduct">发布宝贝</el-menu-item>
            <el-menu-item index="1-4-4">出售中的宝贝</el-menu-item>
          </el-submenu>
          <el-submenu index="order">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">交易管理</span>
            </template>
            <el-menu-item index="1-4-1">已卖出的宝贝</el-menu-item>
            <el-menu-item index="1-4-2">评价管理</el-menu-item>
            <el-menu-item index="1-4-3">提前收款</el-menu-item>
            <el-menu-item index="1-4-4">分期管理</el-menu-item>
            <el-menu-item index="1-4-5">掌柜信用</el-menu-item>
            <el-menu-item index="1-4-6">贷款支付</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">物流管理</span>
            </template>
            <el-menu-item index="1-4-1">发货</el-menu-item>
            <el-menu-item index="1-4-2">物流工具</el-menu-item>
            <el-menu-item index="1-4-3">物流服务</el-menu-item>
            <el-menu-item index="1-4-4">我要寄快递</el-menu-item>
            <el-menu-item index="1-4-5">电子面单平台</el-menu-item>
            <el-menu-item index="1-4-6">仓储管理</el-menu-item>
            <el-menu-item index="1-4-6">仓储库存</el-menu-item>
            <el-menu-item index="1-4-6">商家裹裹寄件</el-menu-item>
            <el-menu-item index="1-4-6">菜鸟发货平台</el-menu-item>
          </el-submenu>
          <el-submenu index="1-6">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">自运营中心</span>
            </template>
            <el-menu-item index="1-4-1">淘宝直播</el-menu-item>
            <el-menu-item index="1-4-2">用户运营中心</el-menu-item>
            <el-menu-item index="1-4-3">淘宝群</el-menu-item>
            <el-menu-item index="1-4-4">发微淘</el-menu-item>
            <el-menu-item index="1-4-5">商家短视频</el-menu-item>
            <el-menu-item index="1-4-6">洋淘买家秀</el-menu-item>
          </el-submenu>
          <el-submenu index="1-7">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">货源中心</span>
            </template>
            <el-menu-item index="1-4-1">进货管理</el-menu-item>
            <el-menu-item index="1-4-2">品牌货源</el-menu-item>
            <el-menu-item index="1-4-3">批发进货</el-menu-item>
            <el-menu-item index="1-4-4">淘工厂</el-menu-item>
            <el-menu-item index="1-4-5">分销管理</el-menu-item>
            <el-menu-item index="1-4-6">淘分销</el-menu-item>
            <el-menu-item index="1-4-6">货源保税直邮</el-menu-item>
            <el-menu-item index="1-4-6">找货神器</el-menu-item>
            <el-menu-item index="1-4-6">家电采购</el-menu-item>
          </el-submenu>
          <el-submenu index="1-8">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">店铺管理</span>
            </template>
            <el-menu-item index="1-4-1">店铺装修</el-menu-item>
            <el-menu-item index="1-4-2">图片空间</el-menu-item>
            <el-menu-item index="1-4-3">手机店铺</el-menu-item>
            <el-menu-item index="1-4-4">查看官网店铺</el-menu-item>
            <el-menu-item index="1-4-5">宝贝分类管理</el-menu-item>
            <el-menu-item index="1-4-6">店铺基本设置</el-menu-item>
            <el-menu-item index="1-4-6">域名设置</el-menu-item>
            <el-menu-item index="1-4-6">贷款</el-menu-item>
            <el-menu-item index="1-4-6">子账号管理</el-menu-item>
            <el-menu-item index="1-4-6">智能设计</el-menu-item>
            <el-menu-item index="1-4-6">代运营授权</el-menu-item>
            <el-menu-item index="1-4-6">店铺经营许可</el-menu-item>
            <el-menu-item index="1-4-6">账房</el-menu-item>
            <el-menu-item index="1-4-6">商家保障</el-menu-item>
            <el-menu-item index="1-4-6">入驻海淘</el-menu-item>
            <el-menu-item index="1-4-6">多店管理</el-menu-item>
            <el-menu-item index="1-4-6">店铺品质管理</el-menu-item>
            <el-menu-item index="1-4-6">风险保证金</el-menu-item>
            <el-menu-item index="1-4-6">我要开票</el-menu-item>
            <el-menu-item index="1-4-6">市场入驻</el-menu-item>
            <el-menu-item index="1-4-6">权益中心</el-menu-item>
            <el-menu-item index="1-4-6">主体变更及升级</el-menu-item>
            <el-menu-item index="1-4-6">金牌卖家</el-menu-item>
          </el-submenu>
          <el-submenu index="1-8">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">营销中心</span>
            </template>
            <el-menu-item index="1-4-1">我要推广</el-menu-item>
            <el-menu-item index="1-4-2">活动报名</el-menu-item>
            <el-menu-item index="1-4-3">店铺营销工具</el-menu-item>
            <el-menu-item index="1-4-4">客户运营平台</el-menu-item>
            <el-menu-item index="1-4-5">淘金币</el-menu-item>
            <el-menu-item index="1-4-6">商家公益</el-menu-item>
            <el-menu-item index="1-4-6">众筹管理</el-menu-item>
            <el-menu-item index="1-4-6">海淘客</el-menu-item>
            <el-menu-item index="1-4-6">农村海淘签约</el-menu-item>
            <el-menu-item index="1-4-6">天天特价</el-menu-item>
            <el-menu-item index="1-4-6">淘抢购</el-menu-item>
            <el-menu-item index="1-4-6">试用</el-menu-item>
            <el-menu-item index="1-4-6">拼团</el-menu-item>
            <el-menu-item index="1-4-6">速卖通签约</el-menu-item>
            <el-menu-item index="1-4-6">直播通</el-menu-item>
            <el-menu-item index="1-4-6">拍卖日历</el-menu-item>
            <el-menu-item index="1-4-6">内容营销推广</el-menu-item>
          </el-submenu>
          <el-submenu index="1-9">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">数据中心</span>
            </template>
            <el-menu-item index="1-4-1">生意参谋</el-menu-item>
            <el-menu-item index="1-4-2">业务专区</el-menu-item>
            <el-menu-item index="1-4-3">商品分析</el-menu-item>
            <el-menu-item index="1-4-4">市场行营</el-menu-item>
            <el-menu-item index="1-4-5">流量行情</el-menu-item>
            <el-menu-item index="1-4-6">竞争情报</el-menu-item>
            <el-menu-item index="1-4-6">数据作战室</el-menu-item>
            <el-menu-item index="1-4-6">数据学院</el-menu-item>
          </el-submenu>
          <el-submenu index="1-10">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">软件服务</span>
            </template>
            <el-menu-item index="1-4-1">我要订购</el-menu-item>
            <el-menu-item index="1-4-2">摄影服务</el-menu-item>
            <el-menu-item index="1-4-2">自动化运营</el-menu-item>
            <el-menu-item index="1-4-2">音乐服务</el-menu-item>
            <el-menu-item index="1-4-2">定制服务</el-menu-item>
            <el-menu-item index="1-4-2">视频制作</el-menu-item>
            <el-menu-item index="1-4-2">定制设计</el-menu-item>
            <el-menu-item index="1-4-2">装修模板</el-menu-item>
          </el-submenu>
          <el-submenu index="1-11">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">客户服务</span>
            </template>
            <el-menu-item index="1-4-1">退款管理</el-menu-item>
            <el-menu-item index="1-4-2">知识产权</el-menu-item>
            <el-menu-item index="1-4-2">职业索赔治理</el-menu-item>
            <el-menu-item index="1-4-2">确凿版权存证</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
<!--        <div>我是内容</div>-->
        <router-view />
      </div>
    </div>
    <FooterAll></FooterAll>
  </div>
</template>
<style>
  .manage-container {
    width: 80%;
    margin: 0 auto;
  }
  .manage-main-area {
    display: flex;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 260px;
    min-height: 400px;
  }
</style>
<script>
import HeaderAll from '../components/HeaderAll'
import FooterAll from '../components/FooterAll'
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
    // collapse () {
    //   this.isCollapse = !this.isCollapse
    // }
  },
  components: {
    HeaderAll, FooterAll
  }
}
</script>
