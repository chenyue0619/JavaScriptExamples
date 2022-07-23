### 1.下列关于readyState状态值，描述正确的选项是？（选择两项）



**A.**状态值为0：此时尚未创建xhr对象，也没有调用open方法

**B.**状态值为1：此时open方法已被调用，但是尚未调用send方法

**C.**状态值为2：send方法已被调用，但是尚未接收到响应数据

**D.**状态值为3：已经接收完响应数据了







### 2.当readyState等于4之后，可以获取到响应数据的选项是？（选择一项）



**A.** (xhr.status >= 200 && xhr.status > 300) || xhr.status === 304

**B.**(xhr.status >= 200 && xhr.status < 300) || xhr.status === 304

**C.** (xhr.status < 200 && xhr.status < 300) || xhr.status === 304

**D.**(xhr.status <= 200 && xhr.status > 300) || xhr.status === 304







### 3.观察下图，代码中有几处错误？（选择一项）

![image-20201215191209703](https://i.loli.net/2020/12/15/qS941rClAHDLg5t.png)



**A.**1处

**B.**2处

**C.**3处

**D.**4处







### 4.下列json数据，格式书写正确的选项是？（选择一项）



**A.**

```js
{
    "username" : "yunmu",//用户名
    "age": 18//年龄
}
```

**B.**

```js
{
    ' username ' : 'yunmu',
      'age' : 16
}
```

**C.**

```js
{
    "username" :"yunmu",
     "age" : "undefined"
}
```

**D.**

```js
{
    username :"yunmu",
    age: 18
}
```









### 5.下列选项中，描述错误的是？（选择一项）



**A.**JSON.stringify()的作用是将 JavaScript 对象转换为JSON字符串

**B.**JSON.stringify()方法让localStorage/sessionStorage可以存储对象

**C.**JSON.parse()作用是将字符串转为一个对象

**D.**JSON.stringify()方法可以判断两个数组或对象中的值是否相等









### 6.下列描述正确的选项是？（选择两项）



**A.**responseType属性值为空时，不可以使用reponse属性接收

**B.**responseType属性值为json时，不可以使用reponseText属性接收

**C.**responseType属性值为text时，只能使用reponseText属性接收

**D.**没有设置reponseType属性时，可以使用reponseText或reponse属性接收







### 7.地址为http://www.baidu.com的页面， 向下列哪个地址发送请求时，不属于跨域的是？（选择一项）

**A.**http://www.baidu.com:8080

**B.**http://www.m.baidu.com

**C.**https://www.baidu.com/less

**D.**http://www.baidu.com/course/list









### 8.如果想要发送json格式的数据，setRequestHeader()和send()方法该如何设置？（选择一项）



**A.**![image-20201215192352467](https://i.loli.net/2020/12/15/eGfWdJp3scTOPHi.png)

**B.**![image-20201215192401262](https://i.loli.net/2020/12/15/GIav9T8yj4mhkPJ.png)

**C.**![image-20201215192412482](https://i.loli.net/2020/12/15/2ZVqQ4ONreTkYwa.png)

**D.**![image-20201215192424503](https://i.loli.net/2020/12/15/t3s9Cb4QOKYzE8B.png)



