const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// var path = require('path');
module.exports = {
    externals: {
      "axios":"axios",
      "Vue": "Vue",
      "VueRouter": "VueRouter",
      "Vuex": "Vuex",
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
        threshold: 1024, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
      // new CopyWebpackPlugin([
      //   {
      //     from: path.resolve(__dirname, '../static'),
      //     to: 'static',
      //     ignore: ['data/*',"css/*", '.*']
      //   }
      // ])
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: true,//console
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          }
      })
    ]
    }
};

