# finally方法(了解)

* 当Promise状态发生变化时，不论如何变化都会执行，不变化不执行

* 一般用于js操作数据库

  ```js
  finally()方法本质上是then()的一个特例const p = new Promise((resolve,reject) => {
      // resolve("成功");
      reject("失败");
  });
  p.finally(
      (data) => {
          console.log("success",data);
      },
      (err) => {
          console.log("error",err);
      }
  ).catch(
      // catch()必须得接受一个参数才会成效
      finally()方法本质上是then()的一个特例() => {}
  )
  ```

* finally()方法本质上是then()的一个特例

  ```js
  p.then(
      (data) => {
          return data;
      },
      (err) => {
          return new Promise((resolve,reject) => {
              reject("失败");
          })
      }
  ).catch(
      () => {}
  )
  ```

  