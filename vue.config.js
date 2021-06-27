module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],

  // vue.config.js
  lintOnSave: false, //取消eslint
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:3000', //设置开发环境服务域名和端口号 别忘了加http
              changeOrigin: true, //這裡true表示实现跨域
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}
