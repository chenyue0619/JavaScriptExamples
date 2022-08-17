# module模块系统

* 定义：
  
  * 模块：一个一个的局部作用域的代码块
  * 一个文件就是一个模块
  
* module需要服务器的环境
  
  * vs => 插件 => live server
  
* 语法：

  * script标签加载import和export的时候要加上type="module"

    ```js
    <script src="index.js" type="module"></script>
    ```
    
    ```js
    <script type="module">
        import"index.js";
    </script>
    ```

* 分析module解决的问题
  
  * 模块化的问题
  * 消除全局变量
  * 管理加载顺序