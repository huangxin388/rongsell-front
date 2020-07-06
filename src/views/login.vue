<template>
  <div class="login-container">
    <div class="login-topbar">
      <div class="topbar-area">
        <div class="site-logo">
          <img src="../assets/logo2.png" style="height:58px"/>
        </div>
        <div class="edit-advice">"登录界面"改进建议</div>
<!--        <div style="clear:both;"></div>-->
      </div>
    </div>
    <div class="login-main-area">
      <div class="login-window">
        <div class="login-pass-window">
          <div class="qr_area"></div>
          <div class="login-switch-tab">
            <el-tabs v-model="activeTab" @tab-click="handleClick">
              <el-tab-pane label="密码登录" name="passLogin" class="tab-item">
                <el-input
                  v-model="userName"
                  placeholder="会员名/邮箱/手机号"
                  class="input-item"
                  prefix-icon="el-icon-s-custom"
                  @blur="userNameOnBlur"
                />
                <el-input
                  v-model="password"
                  placeholder="请输入手机密码"
                  class="input-item"
                  prefix-icon="el-icon-lock" />
              </el-tab-pane>
              <el-tab-pane label="短信登录" name="msgLogin" class="tab-item">
                <el-input v-model="userName" placeholder="请输入手机号" class="input-item"></el-input>
                <el-input v-model="password" placeholder="请输入密码" class="input-item"></el-input>
              </el-tab-pane>
            </el-tabs>
            <div class="login-tips" v-show="showLoginTips">
              <span class="el-icon-info"></span><span>{{loginTips}}</span>
            </div>
          </div>
          <el-button type="primary" @click="login" class="btn-login">{{ loginButtonText }}</el-button>
          <div class="login-link-area">
            <span></span>
            <span>微博登录</span>
            <span></span>
            <span>支付宝登录</span>
          </div>
          <div class="login-link-area login-bottom">
            <span>忘记密码</span>
            <span>忘记用户名</span>
            <span>免费注册</span>
          </div>
        </div>
      </div>
    </div>
    <FooterAll></FooterAll>

  </div>
</template>
<style scoped>
  .login-topbar {
    padding: 22px 0;
  }
  .topbar-area {
    width: 80%;
    margin: 0 auto;
  }
  .edit-advice {
    float: right;
    line-height: 54px;
    font-size: 13px;
    color: #666666;
  }
  .topbar-area:after {
    /*清除浮动*/
    display: block;
    clear: both;
    content: "";
  }
  .login-main-area {
    height: 667px;
    width: 100%;
    background: url("../assets/login-bg2.jpg") 50% no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 66px;
  }
  .login-window {
    width: 340px;
    min-height: 350px;
    padding: 25px;
    background: hsla(0,0%,100%,.9);
    top: 20%;
    right: 14.5%;
    position: absolute;
  }
  .login-pass-window {
    width: 100%;
    height: 100%;
  }
  .login-switch-tab {
    margin-top: 4px;
  }
  .login-switch-tab  /deep/ .el-tabs__item {
    font-size: 18px;
    color: #3c3c3c;
    font-weight: 700;
  }
  .login-switch-tab /deep/ .el-tabs__active-bar {
    background: #3c3c3c;
    height: 3px;
  }
  .btn-login {
    width: 100%;
    background: #f40;
    border: 1px solid #f40;
  }
  .input-item {
    margin-bottom: 20px;
  }
  .login-link-area {
    margin-top: 16px;
  }
  .login-link-area span {
    color: #6c6c6c;
    margin-right: 6px;
  }
  .login-bottom {
    text-align: right;
  }
  .qr_area {
    position: absolute;
    top: 4px;
    right: 4px;
    background: url("../assets/login_qr1.png") no-repeat top right;
    height: 16%;
    width: 16%;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .site-logo {
    float: left;
  }
  .login-tips {
    color: #f40;
    margin-bottom: 20px;
  }
</style>
<script>
import api from '@/api/user'
import FooterAll from '../components/FooterAll'
export default {
  data () {
    return {
      userName: '',
      password: '',
      activeTab: 'passLogin',
      loginByPassword: true,
      showLoginTips: false,
      loginTips: '',
      loginButtonText: '登录'
    }
  },
  methods: {
    login () {
      if (!this.loginByPassword) {
        this.$message.info('暂不支持扫码登录功能')
        return
      }
      if (this.userName.trim() === '') {
        this.loginTips = '请输入用户名'
        this.showLoginTips = true
        return
      }
      if (this.password.trim() === '') {
        this.loginTips = '请输入密码'
        this.showLoginTips = true
        return
      }
      this.loginButtonText = '登陆中...'
      const param = {
        username: this.userName,
        password: this.password
      }
      api.login(param).then(res => {
        if (res.data.code === 0) {
          // 登录成功,跳转
          this.$router.push({ path: '/index' })
        }
      }).catch(res => {
        this.loginButtonText = '登录'
        this.$message.warning(res.data.msg)
      })
    },
    handleClick (tab, event) {
      if (tab.name === 'passLogin') {
        this.loginByPassword = true
      } else {
        this.loginByPassword = false
      }
    },
    userNameOnBlur () {
      if (this.userName.trim() !== '') {
        this.showLoginTips = false
      }
    }
  },
  components: {
    FooterAll
  }
}
</script>
