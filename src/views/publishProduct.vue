<template>
  <div class="publish-container">
      <p>选择分类</p>
      <el-cascader :props="props" @change="handleChange"></el-cascader>
      <p>选择产品</p>
      <div>
        <el-select v-model="product" placeholder="请选择">
          <el-option
            v-for="item in spus"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button :disabled="product === ''" type="primary" @click="skipToDetail">下一步，发布商品</el-button>
  </div>
</template>
<style scoped>
  .publish-container {
    width: 100%;
    background: #FFFFFF;
    text-align: center;
  }
  .center-area {
    margin: 0 auto;
  }
  p {
    line-height: 36px;
    text-align: center;
  }
  .publish-container /deep/ .el-button {
    margin: 24px auto;
    display: block;
  }

</style>
<script>
import groupApi from '@/api/spec_group.js'
import productApi from '@/api/product.js'
export default {
  mounted () {
    console.log('id')
    console.log(this.product)
  },
  data () {
    return {
      product: '',
      spus: [],
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          const params = {
            parentId: node.value
          }
          groupApi.getParallelChildrenGroup(params).then(res => {
            let nodes
            if (res.data.code === 0) {
              nodes = Array.from(res.data.data)
                .map(item => ({
                  value: item.id,
                  label: item.name,
                  leaf: item.ifParent === false
                }))
            }
            resolve(nodes)
          })
        }
      }
    }
  },
  methods: {
    handleChange (value) {
      this.loadSkuInfo(value[value.length - 1])
    },
    loadSkuInfo (id) {
      const params = {
        spgId: id
      }
      productApi.getSpuInfo(params).then(res => {
        if (res.data.code === 0) {
          this.spus = Array.from(res.data.data)
            .map(item => ({
              value: item.id,
              label: item.title
            }))
        }
      })
    },
    skipToDetail () {
      this.$router.push({ name: 'editProductInfo', params: { id: this.product } })
    }
  }
}
</script>
