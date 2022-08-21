### 1.下列关于前后端通信的概念，说法不正确的是？（选择一项）B

**A.** 前后端通信指的是前端和后端数据交互的过程

**B.**常见的前后端通信的过程是：服务器向浏览器请求数据，浏览器向服务器响应数据

**C.**能和服务器通信的就叫客户端 

**D.**浏览器和服务器之间的数据交互过程属于前后端通信





### 2.浏览器在解析下面哪一个标签时，会向服务器发送请求？（选择两项）AD

**A.** <img>

**B.**<form></form>

**C.**<a></a>

**D.**<script></script>





### 3.下面关于HTTP相关概念，说法错误的是？（选择一项）C



**A.** HTTP是超文本传输协议

**B.**HTML、JS、CSS等文件，都是通过 HTTP在服务器和浏览器之间传输

**C.** 浏览器在请求某一个地址时，会直接向服务器发起HTTP请求

**D.**浏览器和服务器之间，通过TCP连接







### 4.下列关于HTTP报文，说法错误的是？（选择一项）

C

**A.** HTTP报文分为请求报文和响应报文

**B.**请求报文分为请求头、请求体，请求头又分为起始行和首部

**C.** GET和POST请求都有请求头、请求体

**D.**通过GET方法，发送的数据会在网址栏中体现出来





### 5.下列关于http方法的语义，描述正确的选项是？（选择两项）AD



**A.** GET方法一般表示获取数据，例如：获取图片资源

**B.**PUT方法一般表示添加数据，例如：注册时添加数据

**C.** POST方法一般表示更新数据，例如：修改个人信息

**D.** DELETE方法一般表示删除数据，例如：删除留言





### 6.关于GET请求和POST请求，下列说法错误的是？（选择两项）



**A.** GET请求不能通过请求体携带数据，但是可以通过请求头携带数据

**B.**GET请求，可以在通过代码“xhr.send('sex=male')”，成功的发送数据

**C.** POST 请求主要通过请求体携带数据，不能通过请求头携带

**D.** POST请求可以通过“xhr.send(`username=${encodeURIComponent('张三')} `);”的形式发送数据。







### 7.下列关于常见的HTTP状态码，描述正确的选项是？（选择两项）AC

**A.** 状态码为200，表示请求成功

**B.**状态码为302，表示永久重定向，重新跳转到其它网址

**C.** 状态码为404，表示找不到页面

**D.** 状态码为500，表示浏览器中的代码存在错误





### 8.关于cookie，下列说法正确的是？（选择两项）BD

**A.** cookie是服务器端存储数据的一种方式

**B.**浏览器在每次发送请求时，会自动把cookie发送到服务器端

**C.** 可以在cookie中保存密码等信息

**D.** 可以利用cookie，统计用户的访问习惯，比如用户什么时间段会访问网站







### 9.关于cookie的使用，下列说法正确的是？（选择两项）BD



**A.** 利用document.cookie ="age"，可以写入一个cookie

**B.** 读取cookie，可以使用document.cookie

**C.** 可以使用“document.cookie = 'username=zs; age=18'”的形式批量设置cookie

**D.** document.cookie获取到的值，是名值对构成的字符串，例如：username=zs; age=18





### 10.下列代码中，可以正确设置两个cookie的失效时间为1天的选项是？（选择一项）A

**A.** [![rpUzdK.png](https://s3.ax1x.com/2020/12/08/rpUzdK.png)](https://imgchr.com/i/rpUzdK)

**B.** [![rpaPRH.png](https://s3.ax1x.com/2020/12/08/rpaPRH.png)](https://imgchr.com/i/rpaPRH)

**C.** [![rpaAsI.png](https://s3.ax1x.com/2020/12/08/rpaAsI.png)](https://imgchr.com/i/rpaAsI)

**D.**[![rpaELt.png](https://s3.ax1x.com/2020/12/08/rpaELt.png)](https://imgchr.com/i/rpaELt)







### 11.下列选项中，都是与cookie的属性相关的内容，说法错误的是？（选择一项）B



**A.** 创建cookie时，必须设置名称和值两个属性

**B.** 如果cookie 的名称或值包含非英文字母，写入该cookie时无需处理

**C.** 可以使用Expires 或 Max-Age两个属性，为cookie设置失效时间

**D.** 没有设置失效时间的cookie称为会话cookie，浏览器关闭该cookie就会消失







