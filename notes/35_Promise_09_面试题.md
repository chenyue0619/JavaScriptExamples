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

  