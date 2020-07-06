import { fetchPost } from '@/utils/http'

export default {
  getParallelChildrenCategory (params) { // 普通用户获取分类列表
    return fetchPost('/category/getparallelchildrencategory', params)
  }
}
