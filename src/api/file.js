import { fetchPost } from '@/utils/http'

export default {
  uploadImage (params) { // 上传图片
    return fetchPost('/manage/product/uploadimage', params)
  },
  deleteImage (params) { // 删除服务器上的图片
    return fetchPost('/manage/product/deleteimage', params)
  }
}
