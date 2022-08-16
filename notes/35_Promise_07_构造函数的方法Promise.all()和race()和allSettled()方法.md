# Promise.all()和race()和allSettled()方法

* Promise.all()

  * 定义：

    * Promise.all()关注多个Promise对象的状态变化
    * 传入多个Promise实例，包装成一个新的Promise实例返回

  * 基本用法：

    * Promise.all()的状态变化与所有传入的Promise实例对象状态有关

    * 所有状态都变成resolved，最终的状态才会变成resolved

    * 只要有一个变成rejected，最终的状态才就变成rejected

      ```js
      const print = (ms) => {
          return new Promise((resolve,reject) => {
              setTimeout(resolve,ms);
          })
      }
      let p1 = print(1000).then(() => {console.log("p1完成了")});//p1完成了
      let p2 = print(2000).then(() => {console.log("p2完成了")});//p2完成了
      let p = Promise.all([p1,p2]).then(() => {})
      console.log(p);//[[PromiseState]]: "fulfilled"
      p.then(
          () => {
              console.log("success");//success
          },
          () => {
              console.log("error");
          }
      )
      ```

* Promise.race()

  * Promise.race()的状态取决于第一个完成的Promise实例对象

  * 如果第一个完成的成功了，最终的就是成功；

  * 如果第一个完成的失败了，那最重的就失败

    ```js
    const print = (ms) => {
        return new Promise((resolve,reject) => {
            setTimeout(resolve,ms);
        })
    }
    let p1 = print(1000).then(
        () => {
            // console.log("p1完成了");
            return new Promise(reject => {"p1失败了"})
        }
    );
    let p2 = print(2000).then(() => {console.log("p2完成了")});//p2完成了
    
    
    let r = Promise.race([p1,p2]);
    r.then(
        () => {
            console.log("success");
        },
        () => {
            console.log("error");
        }
    )
    
    // 最终结果：
    // 若p1成功：p1完成了  success  p2完成了
    // 若p1失败：p2完成了  success
    ```

* Promise.allSettled()

  * Promise.allSettled()的状态与传入的Promise状态无关

  * 永远都是成功的:[[PromiseState]]: "fulfilled"

  * 他只会重视的记录各个Promise的表现，就是说会把每一个Promsie的状态记录下来

    ```js
    const print = (ms) => {
        return new Promise((resolve,reject) => {
            setTimeout(resolve,ms);
        })
    }
    let p1 = print(1000).then(
        () => {
            console.log("p1完成了");
            // return new Promise(reject => {"p1失败了"})
        }
    );
    let p2 = print(2000).then(() => {console.log("p2完成了")});//p2完成了
    
    let as = Promise.allSettled([p1,p2]);
    as.then(() => {console.log(1)});//1
    console.log(as);
    //[[PromiseState]]: "fulfilled"
    //[[PromiseResult]]: Array(2)
    // 0: {status: 'fulfilled', value: undefined}
    // 1: {status: 'fulfilled', value: undefined}
    ```

    