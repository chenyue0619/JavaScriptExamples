# POST请求

* 携带数据

  * POST请求主要通过请求体携带数据

    ```js
    const url = `https://www.imooc.com/api/http/search/suggest?word=js&username=xiaoming&age=${encodeURIComponent("小学生")}`;
    
    ```

  * 同时也可以通过请求头携带数据xhr.send()

    ```js
    xhr.send("company=shanghai&sex=man");
    ```

    ![1661175497305](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661175497305.png)

* 请求数据的格式

  * &连接

    ```js
    xhr.send("company=shanghai&sex=man");
    ```

  * 不能直接传递对象，需要先将对象转换成字符串的形式

    ```js
    xhr.send({sex:"man"});//[object Object]
    ```

* 数据编码

  ```js
  xhr.send(`sex=${encodeURIComponent("男")}`);//sex=%E7%94%B7
  ```

  



