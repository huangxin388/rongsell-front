<template>
<!--  ---------------------------------------------商品管理--------------------------------------------- -->
  <div>
    <div class="product-container" v-for="item in productList" :key="item.id">
      <div class="product-item">
        <img :src="item.imageHost + item.mainImage" />
        <div class="cart-content-middle">
          <p class="cart-item-name">{{item.title}}</p>
          <p class="cart-item-info"><span>商品状态:</span>{{item.status}}</p>
        </div>
        <div class="change-status">
          <p class="cart-item-onsale cart-item-btn" @click="changeProductStatus(item.id, 1)">上架</p>
          <p class="cart-item-nosale cart-item-btn" @click="changeProductStatus(item.id, 2)">下架</p>
        </div>
        <div class="modify-product">
          <p class="cart-item-edit cart-item-btn" @click="editProduct(item.id)">编辑</p>
          <p class="cart-item-delete cart-item-btn" @click="changeProductStatus(item.id, 3)">删除</p>
        </div>
      </div>
    </div>
    <div>
      <el-pagination
        layout="prev, pager, next"
        :page-count="8"
        :total="pagination.total"
        :pageSize="pagination.pageSize"
        :current-page="pagination.pageNum"
        @current-change="currentPageChange"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="80%"
      :destroy-on-close="true">
      <ProductForm ref="dialogForm" @closeMe="closeDialog" @freshParent="loadProductList"></ProductForm>
      <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">取 消</el-button>
    <el-button type="primary" @click="submitForm">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<style scoped>
  .product-item {
    display: flex;
    margin-bottom: 10px;
  }
  .cart-content-middle {
    margin-right: 60px;
  }
  .product-item img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    cursor: pointer;
  }
  .cart-item-name {
    overflow: hidden;
    width: 170px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    cursor: pointer;
  }
  .cart-item-name:hover {
    color: #ff4400;
  }
  .cart-item-info {
    color: #9c9c9c;
  }
  .cart-item-btn {
    cursor: pointer;
  }
  .cart-item-btn:hover {
    text-decoration: underline;
  }
  .change-status {
    margin-right: 30px;
  }
</style>
<script>
import skuApi from '../../api/sku'
import ProductForm from './productForm'
export default {
  created () {
    this.loadProductList()
    this.resolve()
    this.resultMap = new Map()
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '',
      productList: [],
      skuList: [],
      pagination: {
        total: 0,
        pageNum: 1,
        pageSize: 6
      }
    }
  },
  methods: {
    resolve () {
      skuApi.testResolve(null).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.skuList = res.data.data
          // 每个sku的参数列表数组
          const parammeterList = []
          this.skuList.forEach(item => {
            parammeterList.push(item.param)
          })
          // 首先获取该数组中每个对象的键值，也就是下面循环中的key
          const obj = parammeterList[0]
          for (const key in obj) {
            // 属性数组，用于存储参数列表数组中每个对象，相同属性的不同值
            const attributeList = []
            // 遍历参数列表数组，如果如果对象中的该属性不存在于此属性对应的属性数组中则将其加入属性数组
            parammeterList.forEach(item => {
              if (attributeList.indexOf(item[key]) === -1) {
                attributeList.push(item[key])
              }
            })
            // 最后将属性及属性数组存入一个map中
            this.resultMap.set(key, attributeList)
          }
          console.log('结果')
          console.log(this.resultMap)
        }
      })
    },
    /**
     * 关闭弹出框
     */
    closeDialog () {
      this.dialogVisible = false
    },
    /**
     * 修改商品信息
     * @param id
     */
    editProduct (id) {
      console.log('编辑商品')
      console.log('id = ' + id)
      const params = {
        skuId: id
      }
      // 首先通过skuid找到此商品对应的spu，获取spgid
      skuApi.manageGetSkuById(params).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.dialogVisible = true
        }
      })
    },
    /**
     * 商品上下架及删除
     * @param id
     * @param status
     */
    changeProductStatus (id, status) {
      const params = {
        productId: id,
        status: status
      }
      skuApi.changeSkuStatus(params).then(res => {
        if (res.data.code === 0) {
          this.loadProductList()
        } else {
          this.$message.warning('操作失败')
        }
      })
    },
    /**
     * 加载商品列表
     */
    loadProductList () {
      const param = {
        pageNum: this.pagination.pageNum,
        pageSize: this.pagination.pageSize
      }
      skuApi.manageGetSkuList(param).then(res => {
        if (res.data.code === 0) {
          this.productList = res.data.data.list
          this.pagination.pageNum = res.data.data.pageNum
          this.pagination.pageSize = res.data.data.pageSize
          this.pagination.total = res.data.data.total
          this.productList.forEach(item => {
            if (item.status === 1) {
              item.status = '在售'
            } else if (item.status === 2) {
              item.status = '下架'
            } else {
              item.status = '删除'
            }
          })
        } else {
          this.$message.warning('获取商品列表失败')
        }
      })
    },
    /**
     * 弹出框中的回调方法 // TODO 待删除或修改
     */
    submitForm () {
      console.log('点击了提交按钮')
      this.$refs.dialogForm.onEditProduct()
    },
    /**
     * 翻页
     * @param currentPage
     */
    currentPageChange (currentPage) {
      this.pagination.pageNum = currentPage
      this.loadProductList()
    }
  },
  components: {
    ProductForm
  }
}
</script>
