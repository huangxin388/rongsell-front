import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isLogin: false,
      userName: '亲，请登录'
    }
  },
  mutations: {
    loginSetItems (state, userName) {
      state.user.isLogin = true
      state.user.userName = userName
    },
    logoutClearItems (state) {
      state.user.isLogin = false
      state.user.userName = ''
    }
  },
  actions: {
    //
  }
})
