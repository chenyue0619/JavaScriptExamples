# ajax的使用步骤

* 实现方式

  * 借助构造函数XMLHttpRequest
  * 不论是XMLHttpRequest，还是Ajax，都没有和具体的某种数据格式绑定

* ajax实现步骤

  * 1、创建xhr对象(XMLHttpRequest)

    ```js
    // 1、创建xhr对象
    const xhr = new XMLHttpRequest()
    ```

  * 2、准备发送请求

    * GET方法：在url地址请求头里面携带数据
    * word=js&username=xiaoming用&连接数据
  
    ```js
    // 2、准备发送请求
    xhr.open(
        `请求方式->HTTP方法:GET POST PUT DELETE`,
        `请求地址->地址URL:https://www.imooc.com/api/http/search/suggest?word=js&username=xiaoming`,
      `是否异步方式->`true
    )
  ```
  
  * 3、发送请求
  
    ```js
    // 3、发送请求  send()的参数是通过请求体携带的数据
  //  get没有请求体  xhr.send(null)
    xhr.send();
  ```
  
  * 4、监听事件，处理响应
  
  * xhr.readyState是xhr的自身的状态码
    * xhr.status:HTTPCode  2**
    * xhr.responseText：获取到响应后，相应的内容会自动填充xhr对象的属性
  
    ```js
    // 4、监听事件，处理响应：当获取到响应后，会触发xhr对象的readystatechange事件，可以在该事件中对响应进行处理
        // xhr.readyState是xhr的自身的状态码
        // 0:启动。已经调用open(),但尚未调用send()
        // 1:发送。已经调用send(),但尚未接收到响应
        // 2:接收。已经接受到部分响应数据
        // 4:完成。已经接收到全部响应数据，而且已经可以在浏览器中使用了
    
    // 获取到响应后，相应的内容会自动填充xhr对象的属性
    // xhr.status:HTTPCode  2**
    
    // 为了兼容性，readystatechange中不使用this，而是直接使用xhr
    xhr.onreadystatechange = function(){
        if(xhr.readyState !== 4) return;
    
        if(xhr.status >=200 && xhr < 300 || xhr.status === 304){
            console.log(xhr.responseText);//正常使用我们的响应
      }
    }
    ```
  
    