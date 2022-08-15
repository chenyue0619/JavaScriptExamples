# Promise.resolve()和Promise.reject()方法

* Promise.resolve()创建一个成功状态

  * 语法

    ```js
    Promise.resolve("success").then(
        (data) => {
            console.log("成功",data);//成功 success
        }
    )
    ```

  * 参数

    * 一般参数正常运行

    * 当Promise.resolve()接收的是Promise对象时，直接返回这个Promise对象，什么都不做

      ```js
      let p = new Promise((resolve,reject) => {
          setTimeout(resolve("success"),1000);
          // reject("error");
      });
      // 相当于直接运行p
      Promise.resolve(p).then(
          (data) => {
              console.log("成功",data);//成功 success
          }
      )
      ```

      

  

  