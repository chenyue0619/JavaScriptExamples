# HTTP报文

* 定义：

  * 浏览器向服务器发送请求时，请求本身就是信息，叫请求报文
  * 服务器向浏览器发送响应时传输的信息，叫响应报文

* HTTP报文的格式

  * 请求：

    * 请求头：起始行 + 首部

    * 请求体

    * GET请求，没有请求体，数据通过请求头携带

      ```html
      <form action="https://www.baidu.com/" method="get">
          密码:<input type="password" name="password">
          用户名:<input type="text" name="username">
          <input type="submit">
      </form>
      ```

      ![1660845184644](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660845184644.png)

      ![1660845621126](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660845621126.png)

    * POST请求，有请求体，数据通过请求体携带

      ```html
      <form action="https://www.baidu.com/" method="post">
          密码:<input type="password" name="password">
          用户名:<input type="text" name="username">
          <input type="submit">
      </form>
      ```

      ![1660845313663](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660845313663.png)

      ![1660845378482](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660845378482.png)

  * 响应：

    * 响应头：起始行 + 首部
    * 响应体

  ![1660843699446](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660843699446.png)