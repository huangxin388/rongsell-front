import { fetchGet, fetchPost } from '@/utils/http'

export default {
  getSkuList (params) { // 普通用户获取商品列表
    return fetchPost('/sku/getskulist', params)
  },
  manageGetSkuList (params) { // 管理员获取商品列表
    return fetchPost('/manage/sku/getskulist', params)
  },
  changeSkuStatus (params) { // 管理员改变商品状态    1：在售，2：下架，3：删除
    return fetchPost('/manage/sku/setsalestatus', params)
  },
  manageGetSkuById (params) { // 管理员根据id获取商品详情
    return fetchPost('/manage/sku/getskubyid', params)
  },
  testResolve (params) {
    return fetchPost('/sku/testresolve', params)
  },
  saveOrUpdateProduct (params) { // 管理员添加或编辑商品信息
    return fetchPost('/manage/product/productsave', params)
  },
  getProductCategory () { // 管理员获取所有分类
    return fetchGet('/manage/category/getallcategory')
  },
  manageGetProductDetail (params) { // 管理员获取商品详情
    return fetchPost('/manage/product/getproductdetail', params)
  },
  getSpuInfo (params) { // 获取产品信息
    return fetchPost('/manage/spu/getspus', params)
  },
  getSpuParams (params) { // 获取产品参数
    return fetchPost('/manage/specparam/getspecparam', params)
  },
  submitSpuInfo (params) { // 提交商品信息
    return fetchPost('/manage/spu/spusave', params)
  }
}
