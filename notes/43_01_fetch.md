# fetch

* 定义：

  * fetch也是前后端通信的一种方式
  * fetch是ajax(XMLHttpRequest)的一种替代方案，它是基于Promise的
  * ajax的兼容性比fetch好

* fetch的基本用法

  * fetch()调用之后返回promise对象

    ```js
    const url = "https://www.imooc.com/api/http/search/suggest?word=js";
    fetch(url)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    ```

    ![1661268905963](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661268905963.png)

  * 响应数据response对象
    * body/bodyUsed只能读一次，读过之后不让再读
    * ok: true代表数据可以读取，不需要再判断HTTP状态码
    * redirected: false重定向
    * status: 200状态码
    * statusText: "OK"状态码文本