import { fetchGet, fetchPost } from '@/utils/http'
import store from '../store'

export default {
  login (params) {
    return new Promise(function (resolve, reject) {
      fetchPost('/manage/user/login', params).then(res => {
        const data = res.data
        if (data.code === 0) {
          // 登录成功将用户信息存入localStorage
          localStorage.setItem('isLogin', 'true')
          localStorage.setItem('userName', data.data.username)
          // 登录成功后将用户名存储到vuex中
          store.commit('loginSetItems', data.data.username)
          resolve(res)
        } else {
          reject(res) // 登录失败后交给登录页处理
        }
      })
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      fetchGet('/user/logout').then(res => {
        // 无论请求是否成功，均清除本地记录
        localStorage.clear()
        // 登出后清除vuex中的内容
        store.commit('logoutClearItems')
        resolve(res)
        const data = res.data
        if (data.code === 0) {
          // console.log('退出成功')
        }
      })
    })
  }
}
