const path = require('path');
const webpack = require('webpack');
console.log(222,path.join(__dirname, '../dist'));
module.exports = {
    mode: 'development',// 开发环境
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                // test: /\.(js|jsx)$/,
                test: /\.js$|jsx/,
                use: {
                    loader: "babel-loader"
                  },
                exclude: "/node_modules/"
            }
        ]
    },
    devServer: {
        // webpack-dev-server:简单的 web server，并且具有 live reloading(实时重新加载) 功能
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 10000

    }
}