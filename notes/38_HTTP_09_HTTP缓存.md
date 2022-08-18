# HTTP缓存

* 强制缓存

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





