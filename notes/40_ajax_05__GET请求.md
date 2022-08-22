# GET请求

* 携带数据

  * GET请求不能通过请求体携带数据，但可以通过请求头携带
  * GET方法：在url地址请求头里面携带数据
  * word=js&username=xiaoming用&连接数据
  * xhr.send()里面携带的是请求头里面的数据

* 数据编码

  * 如果携带的数据是非英文的话，比如说汉字，就需要编码之后再发送给后端，不然会造成乱码问题

  * encodeURIContent()编码

    ```js
    const url = `https://www.imooc.com/api/http/search/suggest?word=js&username=xiaoming&age=${encodeURIComponent("小学生")}`;
    
    ```

    ![1661175122379](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661175122379.png)