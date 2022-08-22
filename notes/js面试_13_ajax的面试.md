# ajax的面试

* 手写一个简易的ajax

  ```js
  function ajax(url,success){
      // 创建一个xhr对象
      const xhr = new XMLHttpRequest();
  
      // 监听响应结果
      xhr.addEventListener("readystatechange",() => {
          if(xhr.readyState !== 4) return;
          if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
              // 接收到返回来的数据传给success函数
              success(xhr.responseText);
          }
      })
  
      // 准备发送请求
      xhr.open("GET",url,true);
  
      // 发送请求
      xhr.send(null);
  }
  ```

* 利用promise封装ajax

  ```js
  // promise封装ajax就是将ajas步骤封装在Promise对象里面，将接收到的成功相应的数据传递给resolve()状态
  // 定义一个ajax函数
  const ajax = function (url,success){
      // 定义一个Promise对象
      const p = new Promise(resolve,reject) => {
          // 创建一个xhr对象
          const xhr = new XMLHttpRequest();
  
          // 监听响应结果
          xhr.addEventListener("readystatechange",() => {
              if(xhr.readyState !== 4) return;
              if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                  // 如果成功状态就将xhr接收到的数据传递给resolve()
                  resolve(JSON.parse(xhr.responseText));
                  // 如果失败状态，就定义reject()方法
              }else if(xhr.status === 404){
                  reject(new Error("404 not found"));
              }
  
          })
  
          // 准备发送请求
          xhr.open("GET",url,true);
  
          // 发送请求  null没有请求体
          xhr.send(null)
  
      }
      return p;
  }
  ```

* 解决跨域问题
  * CORS资源跨域共享
  * JSONP