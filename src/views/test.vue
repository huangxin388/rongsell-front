<template>
  <div></div>
</template>
<style>
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  /*  width: 200px;*/
  /*  min-height: 400px;*/
  /*}*/
</style>

<script>
export default {
  created () {
    this.init()
  },
  data () {
    return {
      list: ['wo', 'shi', 'hao', 'ren']
    }
  },
  methods: {
    init () {
      // console.log(this.list)
      // console.log('delete')
      // this.deleteItemByValue(this.list, 'shi')
      // console.log(this.list)
      const mapp = new Map()
      mapp.set('11', 'aa')
      mapp.set('22', 'bb')
      mapp.set('33', 'cc')
      mapp.set('44', 'xx')
      mapp.set('55', 'yy')
      this.list = [...mapp.values()]
      console.log(this.list)
    },
    deleteItemByValue (list, value) {
      if (list.length > 0) {
        list.some((item, i) => {
          if (item === value) {
            list.splice(i, 1)
            return true
          }
        })
      }
    }
  }
}
</script>
