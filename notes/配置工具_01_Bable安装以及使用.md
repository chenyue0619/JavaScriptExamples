# Bable安装以及使用

* 官网：https://www.babeljs.cn/

* 定义：

  * Bable是js的编译器(compiler)
  * 用来将ES6的代码转换成ES6之前的代码

* 编译结果

  * Bable本身可以编译ES6的大部分语法
    * （） => {}  ===>  function(){}
    * let/const   ===>   var
    * 等登
  * 对于ES6新增的API，比如Set、Map、Promise等全布局对象，以及一些定义在全局对象上的方法(比如Object.assign/Array.from)都不能直接编译，需要借助其他的模块
  * Bable一般需要配合webpack来编译模块语法

* 使用Bable前的准备工作

  * 安装node.js

    * node.js是一个平台或者工具，对应浏览器
    * 后端的JavaScript = ECMAScript + IO + File + 等服务器的操作
    * 前端的JavaScript = ECMAScript + DOM + BOM
    * npm：node包管理工具（就好像是VS里面的插件）
    * 检验是否安装成功
      * node -v
      * npm -v

  * 初始化npm

    * npm init

    * 根据指令一路回车

    * package.json得到此文件

      ```js
      {
        "name": "babel",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
      }
      
      ```

  * 安装Babel所需要的包

    * npm config set registry https://registry.npm.taobao.org切换安装源

      * 通过国内的淘宝服务器下载这些包更快一点

    * 安装cli包node_modules

      * npm install --save-dev @babel/core @babel/cli

        ```js
        "devDependencies": {
            "@babel/cli": "^7.18.10",
            "@babel/core": "^7.18.10"
          }
        ```

      * 出现上述代码，说明安装成功Babel
      * 只要有package.json文件，就可以通过npm install命令将node_modules包文件夹下载回来（如果丢失的话）

* 使用Babel编译ES6代码

  * 设置Babel运行命令

    ```js
    "scripts": {
        //-d全称是--out-dir -dist
        //babel src -d lib该指令的意思是将放到src文件夹下面的js文件通过Babel编译成ES6之前的代码放进lib文件夹里面
        //src文件夹手动创建的
        "build": "babel src -d lib"
      },
    ```

  * 手动创建src文件夹，将需要编译的代码放进src文件夹

  * npm run build  ==>  lib文件夹

    * 相当于运行babel src -d lib
    * build是命令的名字
    * run是运行
    * 运行完此命令之后会出现lib文件夹，编译好的ES6文件就出现在此文件夹

  * ES6转换版本：npm install @babel/preset-env --save-dev

    ```js
    //package.json文件
    
    "@babel/preset-env": "^7.18.10"
    ```

  * 创建.babelrc配置文件在src文件夹(设置转换规则)
  
    ```js
    //.babelrc文件
    
    {
      "presets": ["@babel/preset-env"]
    }
    ```
  
  * npm run build