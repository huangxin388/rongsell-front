<template>
  <div class="edit-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基础信息</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item label="商品标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="最多允许输入30个汉字(60字符)"></el-input>
        </el-form-item>
        <el-form-item label="商品副标题">
          <el-input v-model="subTitle"></el-input>
        </el-form-item>
        <div><span>类目属性</span><span>错误填写宝贝属性，可能会引起宝贝下架或搜索流量减少，影响您的正常销售，请认真准确填写！</span></div>
        <el-form-item label="货号">
          <el-input v-model="ruleForm.goodsNum"></el-input>
        </el-form-item>
        <el-form-item v-for="item in paramSelections" :key="item.id" :label=item.name>
          <el-select v-model="item.value" placeholder="请选择">
            <el-option :label="option.name" :value="option.id" v-for="option in item.specParamList" :key="option.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>销售信息</span>
      </div>
      <div>
        <div>
          <span>颜色分类</span>
          <span>请选择或直接输入主色，标准颜色可增加搜索/导购机会，还可填写颜色备注信息（偏深、偏亮等）！</span>
          <span>查看详情</span>
        </div>
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForms" label-width="100px" class="demo-ruleForm">
            <el-form-item label="一口价" prop="price">
              <el-input v-model.number="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="总数量" prop="count">
              <el-input v-model="ruleForm.count"></el-input>
            </el-form-item>
            <el-form-item label="商家编码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="商品条形码">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文描述</span>
      </div>
      <div>
        <div>宝贝图片</div>
        <div>
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
        </div>
        <div>宝贝视频</div>
        <div>宝贝描述</div>
        <div ref="editor"></div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>支付信息</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>物流信息</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>售后服务</span>
      </div>
    </el-card>
    <div>
      <el-button @click="validateSubmit('ruleForm')">提交宝贝信息</el-button>
    </div>
  </div>
</template>
<style>
  .edit-container {
    width: 100%;
  }
  .edit-container /deep/ .el-card {
    margin: 18px auto;
  }
</style>
<script>
import productApi from '@/api/product.js'
import fileApi from '@/api/file'
import E from 'wangeditor'
export default {
  created () {
    this.imageMap = new Map()
  },
  mounted () {
    console.log('spgId' + this.$route.params.spgId)
    console.log('skuId' + this.$route.params.skuId)
    this.spuId = this.$route.params.spgId
    this.getSkuParams(this.$route.params.spgId)
    // 初始化富文本编辑器
    if (!this.editor) {
      this.editor = new E(this.$refs.editor)
      this.editor.create()
    }
  },
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('价格不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 7) {
            callback(new Error('本类目下，宝贝价格不能低于7.00元'))
          } else {
            callback()
          }
        }
      }, 300)
    }
    return {
      spuId: '',
      subTitle: '', // 商品副标题
      subImages: '', // 以字符串形式存储的商品图片数组
      imageList: [], // subImages的数组形式
      detail: '', // 商品详情
      spu: {},
      ruleForm: {
        title: '', // 商品标题
        goodsNum: '', // 货号
        price: '', // 价格
        count: '' // 数量
      },
      rules: {
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { max: 30, message: '最多允许输入30个汉字(60字符)', trigger: 'blur' }
        ],
        price: [
          { validator: checkAge, trigger: 'blur' }
        ],
        count: [
          { required: true, message: '必填项不能为空', trigger: 'blur' }
        ]
      },
      paramSelections: [], // 商品参数单选框
      params: {}, // 上传商品信息时商品的实际参数信息
      uploaderImageList: [], // 图片上传控件需要特殊格式的url列表
      dialogImageUrl: '', // 图片预览地址
      dialogVisible: false // 上传图片后显示删除和放大遮罩层
    }
  },
  methods: {
    // getSpuInfo (spuId) {
    //   const params = {
    //     id: spuId
    //   }
    //   productApi.getSpuInfo(params).then(res => {
    //     if (res.data.code === 0) {
    //       this.spu = res.data.data[0]
    //       console.log(this.spu)
    //       this.getSpuParams(this.spu.spgId)
    //     }
    //   })
    // },
    getSkuParams (gId) {
      const params = {
        groupId: gId
      }
      productApi.getSpuParams(params).then(res => {
        if (res.data.code === 0) {
          this.paramSelections = res.data.data
          console.log('params')
          console.log(this.paramSelections)
        }
      })
    },
    validateSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submit () {
      // 参数信息
      this.paramSelections.forEach(item => {
        if (item.value != null) {
          this.params[item.id] = item.value
        }
      })
      // 组装图片信息
      this.imageList = [...this.imageMap.values()] // map转list
      this.subImages = this.imageList.join(',') // list转字符串
      // 富文本信息
      this.detail = this.editor.txt.html()
      const params = {
        spuId: this.spuId,
        title: this.ruleForm.title,
        subTitle: this.subTitle,
        subImages: this.subImages,
        price: this.ruleForm.price,
        stock: this.ruleForm.count,
        param: this.params,
        detail: this.detail
      }
      productApi.submitProduct(params).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          // 添加商品成功
          this.$message.success('操作成功')
          this.$router.push({ path: '/managePage/product', params: { id: this.product } })
        }
      })
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
    }
  }
}
</script>
