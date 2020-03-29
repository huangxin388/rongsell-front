<template>
  <div id="container">
    <div class="header">
      <img src="../assets/haibao.png" />
    </div>
    <div class="body">
      <div class="fruit-item" v-for="item in fruits" :key="item.id">
        <img :src="item.img" />
        <p>{{item.name}}</p>
        <p class="underline"></p>
        <p>{{item.description}}</p>
        <p class="underline"></p>
        <div>
          <div style="display: inline-block;">{{item.price}}元/斤</div>
          <div style="display: inline-block;width:64%">
            <el-select v-model="item.number" placeholder="请选择数量" popper-class="selector" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <p class="underline"></p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="slogan">
        <p>金额满58元起送</p>
        <p>早上8点到下午16点下单当天送货</p>
        <p>以当天价格为准</p>
        <p>每日当天进货保证都是新鲜蔬菜</p>
        <p>只需网络下单</p>
        <p>就可买到比您家附近店还便宜的新鲜蔬菜</p>
      </div>
      <div class="user-info">
        <p>您只需在下面填写资料，即可下单成功</p>
        <div class="info-input">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="您的电话:"
            v-model="phone">
          </el-input>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="送货地址:"
            v-model="address">
          </el-input>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="备注要求:"
            v-model="comment">
          </el-input>
          <el-button type="primary">提交</el-button>
        </div>
        <div class="call-me">
          <span></span><span><p>15863210517(微信同号)</p></span>
          <span></span><span><p>一键拨号</p></span>
        </div>
      </div>
      <div class="find-me">
        <img src="../assets/weichat.png"/>
        <el-button round type="primary">长按识别二维码加好友</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      fruits: [
        { id: '001', name: '菠菜', img: require('@/assets/bocai.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '002', name: '土豆', img: require('@/assets/tudou.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '003', name: '黄瓜', img: require('@/assets/huanggua.png'), description: 'Vc含量高，降血压', price: 4, number: '' },
        { id: '004', name: '韭菜', img: require('@/assets/jiucai.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '005', name: '芹菜', img: require('@/assets/qincai.png'), description: 'Vc含量高，降血压', price: 3.5, number: '' },
        { id: '006', name: '西葫芦', img: require('@/assets/xihulu.png'), description: 'Vc含量高，降血压', price: 6, number: '' },
        { id: '007', name: '茄子', img: require('@/assets/qiezi.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '008', name: '藕', img: require('@/assets/ou.png'), description: 'Vc含量高，降血压', price: 6, number: '' },
        { id: '009', name: '洋葱', img: require('@/assets/yangcong.png'), description: 'Vc含量高，降血压', price: 3.5, number: '' },
        { id: '010', name: '生菜', img: require('@/assets/shengcai.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '011', name: '蒜苗', img: require('@/assets/suanmiao.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '012', name: '西红柿', img: require('@/assets/xihongshi.png'), description: 'Vc含量高，降血压', price: 7.5, number: '' },
        { id: '013', name: '菜花', img: require('@/assets/caihua.png'), description: 'Vc含量高，降血压', price: 3.5, number: '' },
        { id: '014', name: '西兰花', img: require('@/assets/xilanhua.png'), description: 'Vc含量高，降血压', price: 4, number: '' },
        { id: '015', name: '山药', img: require('@/assets/shanyao.png'), description: 'Vc含量高，降血压', price: 5.5, number: '' },
        { id: '016', name: '山药豆', img: require('@/assets/shanyaodou.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '017', name: '莴苣', img: require('@/assets/woju.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '018', name: '小白菜', img: require('@/assets/xiaobaicai.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '019', name: '油菜', img: require('@/assets/youcai.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '020', name: '香菇', img: require('@/assets/xianggu.png'), description: 'Vc含量高，降血压', price: 7, number: '' },
        { id: '021', name: '金针菇', img: require('@/assets/jinzhengu.png'), description: 'Vc含量高，降血压', price: 7, number: '' },
        { id: '022', name: '杏鲍菇', img: require('@/assets/xingbaogu.png'), description: 'Vc含量高，降血压', price: 7, number: '' },
        { id: '023', name: '大辣椒', img: require('@/assets/dalajiao.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '024', name: '小辣椒', img: require('@/assets/xiaolajiao.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '025', name: '香菜', img: require('@/assets/xiangcai.png'), description: 'Vc含量高，降血压', price: 5, number: '' },
        { id: '026', name: '水萝卜', img: require('@/assets/shuiluobo.png'), description: 'Vc含量高，降血压', price: 2, number: '' },
        { id: '027', name: '胡萝卜', img: require('@/assets/huluobo.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '028', name: '白萝卜', img: require('@/assets/bailuobo.png'), description: 'Vc含量高，降血压', price: 2.5, number: '' },
        { id: '029', name: '青萝卜', img: require('@/assets/qingluobo.png'), description: 'Vc含量高，降血压', price: 2, number: '' },
        { id: '030', name: '荠菜', img: require('@/assets/jicai.png'), description: 'Vc含量高，降血压', price: 4, number: '' },
        { id: '031', name: '卷心菜', img: require('@/assets/juanxincai.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '032', name: '葱', img: require('@/assets/cong.png'), description: 'Vc含量高，降血压', price: 3, number: '' },
        { id: '033', name: '姜', img: require('@/assets/jiang.png'), description: 'Vc含量高，降血压', price: 8, number: '' },
        { id: '034', name: '蒜', img: require('@/assets/suan.png'), description: 'Vc含量高，降血压', price: 8, number: '' }
      ],
      options: [
        { value: '选项1', label: '0.2斤' },
        { value: '选项2', label: '0.4斤' },
        { value: '选项3', label: '0.6斤' },
        { value: '选项4', label: '0.8斤' },
        { value: '选项5', label: '1.0斤' }
      ],
      value: '',
      phone: '',
      address: '',
      comment: ''
    }
  }
}
</script>

<style>
  #container {
    background: #FED428;
  }
  .header img {
    width: 100%;
  }
  .body {
    width: 96%;
    margin: 0 auto;
  }
  .body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .fruit-item {
    text-align: center;
    width: 48%;
  }
  .fruit-item img {
    width: 100%;
  }
  .slogan p {
    color: red;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
  .user-info {
    width: 96%;
    margin: 0 auto;
    border: 1.2px solid #427023;
  }
  .info-input {
    width: 90%;
    margin: 0 auto;
  }
  .el-textarea {
    margin-top: 12px;
    border: 1.2px solid #427023;
  }
  .el-textarea textarea {
    background: transparent;
    color: #676767;
  }
  .el-button {
    width: 100%;
    background: #D04137;
    margin-top: 10px;
    border: 1px solid #D04137;
  }
  .user-info p {
    font-size: 16px;
    text-align: center;
    color: black;
    font-weight: bold;
    margin-top: 6px;
  }
  .find-me {
    width: 100%;
  }
  .find-me img {
    display: block;
    margin: 4px auto;
  }
  .find-me .el-button {
    width: 80%;
    margin: 0px auto 12px auto;
    display: block;
    background: #D04137;
    border: 1px solid #D04137;
  }
  .underline {
    background: black;
    width: 90%;
    height: 1px;
    margin: 2px 0;
  }
</style>
