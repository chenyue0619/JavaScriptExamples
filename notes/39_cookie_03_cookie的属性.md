# cookie的属性

* cookie的名称(Name)和值(value)

  * 最重要的两个属性，创建cookie时必须填写，其他属性可以使用默认值

  * cookie的名称Name或值value如果包含非英文字母

    * 则写入时需要使用encodeURIComponent()编码

      ```js
      document.cookie = `nickname=${encodeURIComponent("大头")}`;
      
      document.cookie = `${encodeURIComponent("昵称")}=${encodeURIComponent("小明")}`;
      
      ```

    * 读取时使用decodeURIComponent()解码

* 失效(到期)时间expires

  * 对于失效的Cookie，会被浏览器清除
  * 如果没有设置失效(到期)时间，这样的Cookie称为会话Cookie(Expires)
  * 它存在内存中，当会话结束，也就是浏览器关闭时，Cookie消失
  * 设置出来的Cookie都默认是expires

* 设置到期时间expires

  * expires

    * 接收Date()对象:expires=${new Date()}

      ```js
      document.cookie = `name=xiaoming;expires=${new Date("2022-10-20")}`;
      ```

      ![1660857095483](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660857095483.png)

  * max-age

    * 接收一个数字

    * 表示当前时间 + 多少秒后过期，单位为秒

      ```js
      document.cookie = `sex=nan;max-age=50`;
      document.cookie = `sex=nan;max-age=`${30*20}`;
      ```

    * 如果max-age的值是0或负数，则Cookie会被删除
  
* Domain域

  * Domain限定了访问Cookie的范围(不同域名)
  
  * 以父级路径.bilibili.com为例
  
    * document.cookie="e=f;domain=.bilibili.com"
  
    * 子级路径移动端·m.bilibili.com
  
      ![1661093690252](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661093690252.png)
  
    * z子级路径网页端www.bilibili.com
  
      ![1661093702305](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661093702305.png)

* path路径
  * 使用JS只能读写当前路径和上级路径的Cookie，无法读写下级路径的Cookie
  * 只有当name、domain、path这三个字段都相同的时候，才是同一个cookie
* HttpOnly
  * 设置了HttpOnly属性的cookie不能通过JS去访问
  * 会将此条数据发给服务器，但是不能通过JS来访问
* Secure安全标志
  * Secure限定了只有在使用了https而不是http的情况下才可以发送给服务器
  * 网页默认是http