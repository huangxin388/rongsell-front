import { fetchPost } from '@/utils/http'

export default {
  manageGetOrderList (params) { // 管理员获取订单列表
    return fetchPost('/manage/order/managegetorderall', params)
  },
  manageOrderSearch (params) { // 管理员获搜索订单
    return fetchPost('/manage/order/manageordersearch', params)
  },
  manageSendGoods (params) { // 管理员发货
    return fetchPost('/manage/order/managesendgoods', params)
  }
}
