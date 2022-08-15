# 面试题

* 第一题：只有成功状态不执行catch()

  ```js
  Promise.resolve()
      .then(() => {
      console.log(1);//正常执行
  })
      .catch(() => {
      console.log(2);//因为是成功状态，并没有失败状态，所以catch()方法不会执行
  })
      .then(() => {
      console.log(3);//跳过catch()继续执行
  })
  //最终控制台输出1 3
  ```

* 第二题：catch()默认return undefined；成功状态

  ```js
  Promise.resolve()
      .then(() => {
      console.log(1);//1
      // 抛出异常，变为失败状态
      throw new Error("error1");
  })
  // 失败状态catch()继续执行
      .catch(() => {
      console.log(2);//2
  
  })
  // catch()默认 return undefined，所以then()继续执行
      .then(() => {
      console.log(3);//3
  });
  ```

* 第三题：catch()默认返回成功状态

  ```js
  Promise.resolve()
      .then(() => {
      console.log(1);//1
      // 状态变为失败
      throw new Error("error1");
  })
      .catch(() => {
      // 抓住错误，执行catch()
      // 默认返回return undefined，成功状态
      console.log(2);//2
  })
  // 不执行
      .catch(() => {
      console.log(3);
  })
  ```

  