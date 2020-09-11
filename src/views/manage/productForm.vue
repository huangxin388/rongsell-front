<template>
  <div class="add-product-container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="demo-ruleForm">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属分类" prop="categoryId">
        <el-select v-model="form.categoryId" placeholder="请选择该商品的分类">
          <el-option v-for="(item, index) in categoryOptions" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品子标题">
        <el-input v-model="form.subtitle"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          ref="imageUploader"
          action="http://localhost:8080/manage/product/uploadimage"
          list-type="picture-card"
          :http-request="handleUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="uploaderImageList">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品详情">
        <div ref="editor"></div>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stock">
        <el-input v-model="form.stock"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<style></style>
<script>
import api from '@/api/product'
import fileApi from '@/api/file'
import E from 'wangeditor'
export default {
  data () {
    return {
      form: {
        id: '',
        categoryId: '',
        name: '',
        subtitle: '',
        mainImage: '',
        price: '',
        stock: '',
        subImages: '', // 将imageUrlList转成字符串传给后端
        detail: ''
      },
      categoryOptions: [], // 分类信息
      dialogImageUrl: '', // 图片预览地址
      dialogVisible: false, // 上传图片后显示删除和放大遮罩层
      editor: '', // 富文本编辑器对象
      imageList: [], // subImages的数组形式
      uploaderImageList: [], // 图片上传控件需要特殊格式的url列表
      deletedFileName: '', // 用户删除上传控件中的图片时，用来存储被删除图片的名字
      imageMap: {}, // 添加或删除图片时做数据中转用
      imageHost: '', // 图片服务器地址
      rules: {
        name: [{ required: true, message: '请输商品名称', trigger: 'blur' }],
        categoryId: [{ required: true, message: '请选择商品分类', trigger: 'change' }],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        stock: [{ required: true, message: '请输入商品库存', trigger: 'blur' }]
      }
    }
  },
  created () {
    this.imageMap = new Map()
    this.getProductCategories()
  },
  mounted () {
    // 初始化富文本编辑器
    if (!this.editor) {
      this.editor = new E(this.$refs.editor)
      this.editor.create()
    }
  },
  methods: {
    loadProductInfo (productId) {
      const param = {
        productId: productId
      }
      api.manageGetProductDetail(param).then(res => {
        if (res.data.code === 0) {
          this.form.id = res.data.data.id
          this.form.name = res.data.data.name // 名字
          this.form.categoryId = res.data.data.categoryId // 分类
          this.form.subtitle = res.data.data.subTitle // 子标题
          this.form.mainImage = res.data.data.mainImage // 图片
          this.form.detail = res.data.data.detail // 富文本内容
          this.editor.txt.html(this.form.detail) // 富文本赋值
          this.form.price = res.data.data.price // 价格
          this.form.stock = res.data.data.stock // 库存
          this.imageHost = res.data.data.imageHost // 图片所在的服务器
          this.form.subImages = res.data.data.subImages
          // 拼接图片上传控件的数据
          if (this.form.subImages !== '') { // 如果有多张图
            const imageList = this.form.subImages.split(',')
            imageList.forEach(value => {
              this.uploaderImageList.push({ uid: value, url: this.imageHost + value }) // 显示
              this.imageMap.set(value, value) // 数据
            })
          }
        }
      })
    },
    getProductCategories () { // 获取商品分类信息
      api.getProductCategory().then((res) => {
        if (res.data.code === 0) {
          this.categoryOptions = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    handleRemove (file) { // 删除图片时删除map中的键值对
      if (this.imageMap.has(file.uid)) {
        // this.deleteItemByValue(this.imageList, uri)
        // TODO 用户点击取消时是否删除此次增加商品时上传的所有图片还得再斟酌一下
        const param = {
          fileName: this.imageMap.get(file.uid)
        }
        fileApi.deleteImage(param).then((res) => {
          if (res.data.code === 0) {
            this.imageMap.delete(file.uid)
            this.$message.success('图片删除成功')
          } else {
            console.log('图片删除失败')
          }
        })
      }
    },
    handleUpload (param) { // 重写图片的上传逻辑
      const formData = new window.FormData()
      formData.append('imageFile', param.file)
      fileApi.uploadImage(formData).then(res => { // 上传
        if (res.data.code === 0) {
          // 上传成功后存储图片的url地址
          this.imageMap.set(param.file.uid, res.data.data.uri)
          // 上传成功
          this.$message.success('图片上传成功')
        } else {
          this.$message.warning('上传图片到图片库失败，无法完成提交')
        }
      })
    },
    handlePictureCardPreview (file) { // 图片预览
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onEditProduct () { // 添加或编辑商品商品
      // 验证必填项
      let flag = true
      this.$refs.form.validate((valid) => {
        if (!valid) {
          flag = false
        }
      })
      if (!flag) {
        return
      }
      this.form.detail = this.editor.txt.html() // 获取富文本内容
      this.form.subImages = this.imageList.join(',') // 获取图片
      this.imageList = [...this.imageMap.values()] // map转list
      this.form.subImages = this.imageList.join(',') // list转字符串
      api.saveOrUpdateProduct(this.form).then((res) => {
        if (res.data.code === 0) {
          // 添加商品成功
          this.$message.success('操作成功')
          // 调用父组件方法，关闭此弹出框
          this.$emit('closeMe')
          // 调用父组件方法，刷新商品信息
          this.$emit(('freshParent'))
        } else {
          this.$message.warning(res.data.data)
        }
      })
    },
    deleteItemByValue (list, value) {
      if (list.length > 0) {
        list.some((item, i) => {
          if (item === value) {
            this.deletedFileName = value
            list.splice(i, 1)
            return true
          }
        })
      }
    }
  }
}
</script>
