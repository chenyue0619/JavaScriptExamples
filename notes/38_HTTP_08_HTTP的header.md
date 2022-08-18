# HTTP的头header

* 常见的请求头Request Header
  * **Accept:** 浏览器可接收的数据格式如html  css
  * **Accept-Encoding:**浏览器可接收的压缩算法，如gzip
  * **Accept-Language:**浏览器可接收的语言，如zh-CN
  * **Connection: keep-alive**一次TCP连接重复使用
  * **Cookie:** 缓存内容
  * **Host:** 请求域名(IP)
  * **User-Agent:** 简称UA，浏览器信息
  * **Content-Type:** 发送数据的格式，如application/json
* 常见的响应头Response Header
  * **Content-Type**:返回数据的格式，如application/json
  * **Content-Length:** 返回数据的大小，多少字节
  * **Content-Encoding:**返回数据的压缩算法，如gzip
  * **Set-Cookie:** 服务端修改Cookie缓存