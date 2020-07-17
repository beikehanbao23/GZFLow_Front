# GZFLow_Front
GZFlow Front.    React



### 开发环境初始化

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install webpack -g
```

#### 1.创建React项目
```
cnpm init

cnpm install react react-dom --save

cnpm install webpack --save-dev
cnpm install yargs-parser
cnpm install string-width

-- 引入Babel库进行转码。

cnpm install --save-dev babel-loader @babel/preset-react @babel/preset-env @babel/core

// babel-loader: babel加载器
// babel-preset-es2015: 支持es2015
// babel-preset-react: jsx 转换成js

// 在开发环境中局部安装webpack-cli
cnpm install -D webpack-cli

cnpm install resolve-cwd

npm install webpack-dev-server -g

```

项目目录和源码
```

   |--dist(项目打包输出目录)
       |--bundle.js(该文件是由webpack打包生成)
       |--index.html　　
   |--src
       |--index.js
   |--webpack
       |--webpack.config.js
   |--package.json

 　index.html
```
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="app">
    /* react DOM*/
    </div>
    <script src="bundle.js"></script>
</body>
</html>  
```


## More

##### react & webpacl
https://www.cnblogs.com/raion/p/8053799.html

https://blog.zfanw.com/difference-between-dependencies-and-devdependencies/

##### babel
https://zhuanlan.zhihu.com/p/43249121

##### develop tool

https://www.valentinog.com/blog/babel/

https://www.cnblogs.com/xiaokebb/p/9448734.html

https://webpack.docschina.org/guides/development/