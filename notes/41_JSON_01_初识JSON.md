# 初识JSON

* JSON定义：

  * JSON全称JavaScript Object Nonation
  * Ajax发送和接收数据的一种格式

* JSON用处

  ```js
  //js -> JSON -> PHP -> Java
  //PHP/Java -> JSON -> JS
  ```

* JSON格式

  * 简单值形式

    * json文件后缀名.json
    * JSON的简单值形式就对应着JS中的基础数据类型
    * 数字、字符串、布尔值、null
    * 注意事项
      * undefined会转换成字符串类型
      * JSON中字符串必须加引号且使用双引号(属性名加双引号)
      * JSON中是不能有注释的

  * 对象形式

    * JSON的对象形式就对应着JS中的对象

    * 属性名是字符串的话必须加双引号

    * 属性值是字符串的话也必须使用双引号

    * 不支持undefined

      ```json
      {
          "username":"xioaming",
          "sex":"female",
          "age":19
      }
      ```

      ![1661177844653](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661177844653.png)

  * 数组形式

    * JSON的数组形式对应JS中的数组
    * 注意事项
      * 字符串必须加双引号
      * 不支持undefined类型



