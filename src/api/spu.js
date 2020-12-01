import { fetchGet, fetchPost } from '@/utils/http'

export default {
  getProductList (params) { // 普通用户获取商品列表
    return fetchPost('/product/getproductlist', params)
  },
  getProductDetail (params) { // 普通用户获取商品详情
    return fetchPost('/product/getproductdetail', params)
  },
  manageGetProductList (params) { // 管理员获取商品列表
    return fetchPost('/manage/product/getproductlist', params)
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
  changeProductStatus (params) { // 管理员改变商品状态    1：在售，2：下架，3：删除
    return fetchPost('/manage/product/setsalestatus', params)
  },
  getSpuInfo (params) { // 获取产品信息
    return fetchPost('/manage/spu/getspus', params)
  },
  getSpuParams (params) { // 获取产品参数
    return fetchPost('/manage/specparam/getspecparam', params)
  },
  getSaleParams (params) { // 获取产品参数
    return fetchPost('/manage/specparam/getsaleparam', params)
  },
  submitSpuInfo (params) { // 提交商品信息
    return fetchPost('/manage/spu/spusave', params)
  }
}
