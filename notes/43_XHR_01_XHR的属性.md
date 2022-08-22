# XHR的属性

* responseText

  * responseText只能在没有设置responseText或者responseType = "" 或"text"的时候才能使用
  * 以文本的形式响应内容
  *  console.**log**(xhr.responseText);

* response

  * 设置其他的响应类型
  * xhr.responseType = "json"
  * console.**log**(xhr.response);

* timeout

  * 设置请求的超时事件

  * 单位  ms

  * 兼容性：IE6-7不支持，IE8开始支持

    ```js
    xhr.timeout = 1000;
    ```

* withCredentials
  * 指定使用ajax发送请求时是否携带cookie
  * 使用ajax发送请求，默认情况下，同域下，会携带cookie
  * 跨域时，不会   如果要跨域或携带xhr.withCredentials = true
  * 最终能否成功跨域携带cookie，还要看服务器同不同意