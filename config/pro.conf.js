const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const  isProEnv = process.env.NODE_ENV == 'production';
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// var path = require('path');
// 2.6.11
module.exports = {
    externals: {
      "axios":"axios",
      "Vue": "Vue",
      "VueRouter": "VueRouter",
      "Vuex": "Vuex",
    },
    output: {
      filename: `./js/[name].[chunkhash:8].coollsk.js`,
      chunkFilename: `./js/[name].[chunkhash:8].coollsk.js`,
    },
    plugins: [
      
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
        threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
        deleteOriginalAssets: true, // 是否删除原文件
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
            warnings: false,
            compress: {
              
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: !isProEnv,
          parallel: true
        })
      ]
    }
};

