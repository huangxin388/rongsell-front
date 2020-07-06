import { fetchPost } from '@/utils/http'

export default {
  getCartInfo () { // 获取购物车信息
    return fetchPost('/cart/getcartinfo')
  }
}
