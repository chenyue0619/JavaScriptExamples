# XHR的方法

* abort()

  * 终止当前请求

  * 一般配合abort()事件一起使用

  * 用在xhr.send()发送请求操作步骤之后

    ```js
    xhr.send();
    xhr.abort();
    ```

* setRequestHeader()

  * 可以设置请求头信息

  * xhr.setRequestHeader(头部字段的名称，头部字段的值)

    ```js
    // 设置数据发送的的格式
    //以form表单的形式发送数据
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    ```

    