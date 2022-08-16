# Promise的注意事项

* resolve或reject函数执行后的代码：推荐在调用resolve或reject函数的时候加上return，不再执行他们后面的代码

  ```js
  let p = new Promise((resolve,reject) => {
      // return resolve();
      // return reject();
  
      console.log("hi");
  })
  // console.log(p);
  ```

* Promise.all/race/allSettled的参数问题：

  * 参数如果不是Promise数组，会将不是Promise的数组元素转变成Promise对象

    ```js
    Promise.all([1,2,3]).then(
        (datas) => {console.log(datas)}//[1, 2, 3]
    )
    
    // 等价于
    Promise.all([
    // Promise.resolve()相当于直接创建一个成功状态的resolve()对象
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ]).then((datas) => {
        console.log(datas);//[1, 2, 3]
    })
    
    
    // 又等价于
    let p1 = Promise.resolve(1);
    let p2 = Promise.resolve(2);
    let p3 = Promise.resolve(3);
    Promise.all([p1,p2,p3]).then((datas) => {
        console.log(datas);//[1, 2, 3]
    })
    ```

  * 不只是数组，任何可遍历的都可以作为参数

  * 数组、字符串、arguments、NodeList、Set、Map

    ```js
    Promise.all(new Set([1,2,3])).then((datas) => {
        console.log(datas);//[1, 2, 3]
    })
    
    let pp1 = Promise.resolve(new Set([1]));
    let pp2 = Promise.resolve(new Set([2]));
    let pp3 = Promise.resolve(new Set([3]));
    Promise.all([pp1,pp2,pp3]).then((datas) => {
        console.log(datas);//[Set(1), Set(1), Set(1)]
    })
    
    ```

* promise.all/race/allSettled的错误处理

  * 错误既可以单独处理，也可以统一处理

  * 一旦被处理，就不会在其他地方再处理一遍

    ```js
    let ppp1 = Promise.resolve(1);
    // 错误既可以单独catch()方法处理
    let ppp2 = Promise.reject(2).catch(() => {console.log("error")});//error
    // 错误也可以集中catch()处理
    let p = Promise.all([ppp1,ppp2]).catch(() => {console.log("error")});
    ```

    

