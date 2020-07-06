import axios from 'axios'
import qs from 'qs'

export const baseURL = 'http://127.0.0.1:8080/rongsell'
// export const baseURL = 'http://ykfrsh.natappfree.cc/rongsell'
// export const baseURL = 'http://116.62.50.7/rongsell'
// 配置axios
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  withCredentials: true
})

// POST传参序列化(添加请求拦截器)
axiosInstance.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post' && config.url.indexOf('frontend/uploadimage') === -1 && config.url.indexOf('manage/product/uploadimage') === -1) {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
  // 在接收响应做些什么，例如跳转到登录页
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, params, { withCredentials: true })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// //返回一个Promise(发送get请求)
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
