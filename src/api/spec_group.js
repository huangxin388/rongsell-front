import { fetchPost } from '@/utils/http'

export default {
  getParallelChildrenGroup (params) { // 普通用户获取分类列表
    return fetchPost('manage/group/getparallelchildrengroup', params)
  }
}
