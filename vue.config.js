module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  productionSourceMap: true,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/rongsell': {
    //     target: 'http://127.0.0.1:8080/rongsell',
    //     changeOrigin: true
    //   }
    // },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
