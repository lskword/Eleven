const  proConfJs =  require('./config/pro.conf');
const  devConfJs =  require('./config/dev.conf');
const  css = require('./config/css-loader.conf');
const  isProEnv = process.env.NODE_ENV == 'production';
module.exports = {
  // 基本路径
  publicPath: isProEnv? './' : './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  chainWebpack: () => { },
  configureWebpack: () => {
    return  (isProEnv && proConfJs) || devConfJs ;
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css,
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
      open: true,                                 //配置自动启动浏览器
      host: '0.0.0.0',
      port: 8080,                                 // 端口号
      https: false,
      hotOnly: false,                             // https:{type:Boolean}                                      // 配置跨域处理,只有一个代理
      before: () => { }
  },
  // 第三方插件配置
  pluginOptions: {},
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
};
