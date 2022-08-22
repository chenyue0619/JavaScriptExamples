# JSON的常用方法

* JSON.parse()  (JSON  -->  JS)

  * JSON.parse()可以将JSON格式的字符串解析成JS中的对应值

    ```js
    console.log(JSON.parse(xhr.responseText));
    //{username: 'xioaming', sex: 'female', age: 19}对象
    //372486数字
    //[1, 2, 3, 'dsh']数组
    ```

    ![1661180657566](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661180657566.png)

  * 一定要合法的JSON字符串，否则会报错

  * JSON里面不能识别undefined，所以不能转换undefined，会报错

* JSON.stringfy()   (JS  ->  JSON)

  * JSON.stringify()可以将JS的基本数据类型、对象或者数组转换成JSON格式的字符串