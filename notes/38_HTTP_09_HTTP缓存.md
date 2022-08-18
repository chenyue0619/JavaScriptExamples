# HTTP缓存

* 强制缓存

  * 简述：浏览器初次向服务器端发送请求，服务器端响应这个请求之后会向浏览器端返回这个资源，同时会将cache-control数据返回给浏览器端，之后浏览器端再一次向服务器端发送请求的时候，不需要服务器端响应，直接**本地储存**将资源返回给浏览器端，cache-control保存资源所**存在的时间**（判断缓存是否过期）

  ![1660849423933](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660849423933.png)

  ![1660849493738](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660849493738.png)

* cache-control的值

  * max-age  设置缓存过期的时间(单位是秒)
  * no-cache  不用强制缓存，交给服务端处理
  * no-store  不用服务端和本地强制缓存，直接服务端返回一份

  ![1660849673185](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660849673185.png)

  ![1660849748768](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660849748768.png)

* 协商缓存(对比缓存)

  * 服务器端缓存策略
  * 服务器判断客户端资源，是否和服务端资源一样
  * 一直则返回304，否则返回200和最新的资源
  * 简述：协商缓存就是浏览器端初次向服务器端发送请求，服务器端响应请求之后会将资源返回给浏览器端，同时会将资源的标识也会返回给浏览器端；浏览器端再一次携带着资源标识服向务器端发送请求的时候，服务器端会判断该**资源标识是否被修改**，如果未修改就会将该资源返回给浏览器端，如果已修改返回304或者会将资源和新的资源标识返回给浏览器端

  ![1660849895599](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660849895599.png)

  * 资源标识

    * 在Response Header中，有两种
    * Last-Modified资源的最后修改时间
    * Etag资源的唯一标识(一个字符串，类似人类的指纹)

    * Last-Modified

    ![1660850081778](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660850081778.png)

    * Etag

    ![1660850200889](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660850200889.png)

    ![1660850247389](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660850247389.png)

    * 资源标识
      * 会优先使用Etag
      * Last-Modified只能精确到秒级
      * 如果资源被重复生成，而内容不变，则Etag更精确

* HTTP缓存综述

  ![1660850505306](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660850505306.png)

* 三种刷新缓存
  * 正常操作：
    * 地址栏输入URL，跳转链接，前进后退等
    * 强制缓存有效，协商缓存有效
  * 手动刷新
    * F5，点击刷新按钮，右击菜单刷新
    * 强制缓存失效，协商缓存有效
  * 强制刷新
    * ctrl + F5
    * 强制缓存失效，协商缓存失效





