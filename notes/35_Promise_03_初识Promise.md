# 初识Promise

* 定义：

  * Promise是异步操作的一种解决方案
  * Promise一般用来解决层层嵌套的回调函数(回调地狱 callback hell)的问题
  * 回调函数：回调函数就是作为参数传递给函数的函数

* 语法

  * Promise接受一个函数作为参数

    ```js
    let  p = new Promise((resolve,reject) => {});
    ```

  * 状态

    * pending 未完成

    * pending ==> resolve() => fulfilled(resolved)代表成功

    * pending ==> reject() => rejected代表失败

    * Promise的状态一旦变化，就不会再改变了，意思是同时调用resolve()和reject()，Promise只会显示先调用的状态

      ```js
      let p = new Promise((resolve,reject) => {
          resolve();//先调用
          reject();
      })
      console.log(p);//[[PromiseState]]: "fulfilled"
      ```

      ```js
      let p = new Promise((resolve,reject) => {
          reject();//先调用
          resolve();
      })
      console.log(p);//[[PromiseState]]: "rejected"
      ```

* then()方法

  * 语法

    * 接收两个参数(函数)，之间用逗号隔开

    * 执行与否由Promise实例对象的状态所决定

      * resolve => 第一个

        ```js
        let p = new Promise((resolve,reject) => {
            resolve();
        })
        console.log(p);//Promise {<fulfilled>: undefined}
        
        p.then(
            () => {
                console.log("success")//success
            },
            () => {
                console.log("error");
            }
        )
        ```

      * reject    => 第二个

        ```js
        let p = new Promise((resolve,reject) => {
            reject();
        })
        console.log(p);//Promise {<rejected>: undefined}
        
        p.then(
            () => {
                console.log("success");
            },
            () => {
                console.log("error");//error
            }
        )
        ```

  * promise对象执行then()方法之后会再次返回一个Promise对象

    ```js
    // Promise()接受一个函数
    let p1 = new Promise((resolve,reject) => {
        resolve();
        reject();
    });
    //p2又是一个Promise对象
    let p2 = p1.then(
        () => {
            console.log("success");
        },
        () => {
            console.log("error");
        }
    )
    console.log(p1);//[[PromiseState]]: "fulfilled"
    //p2又是一个Promise对象
    console.log(p2);//[[PromiseState]]: "fulfilled"
    ```

  * 在then的回调函数中，return后面的东西，会用Promise包装一下，包装出来的都是成功的Promise对象

    ```js
    // Promise()接受一个函数
    let p1 = new Promise((resolve,reject) => {
        // resolve();
        reject();
    });
    p1.then(
        () => {
            console.log("success1");
        },
        () => {
            console.log("error1");//error1
            // return undefined;//相当于
            return new Promise((resolve,reject) => {
                resolve(undefined);//undefined参数resolve()
            })
        }
    ).then(
        (data) => {
            console.log("success2",data);//success2 undefined
        },
        () => {
            console.log("error2");
        }
    )
    console.log(p1);//[[PromiseState]]: "rejected"
    ```

  * 若要return返回的是失败的对象，手动去写

    ```js
    let p1 = new Promise((resolve,reject) => {
        reject();
    });
    p1.then(
        () => {
            console.log("success1");
        },
        () => {
            console.log("error1");//error1
            return new Promise((resolve,reject) => {
                reject(999);//若不手动写reject()，那么Promise还是会自动包装为成功的对象
            })
        }
    ).then(
        (data) => {
            console.log("success2",data);
        },
        (data) => {
            console.log("error2",data);//error2 999
        }
    )
    console.log(p1);//[[PromiseState]]: "rejected"
    ```

* catch()方法

  * 抓住错误 => reject()

  * 相当于then(null,(err) => {console.log(err)});

  * then方法的一个特例

    ```js
    let p = new Promise((resolve,reject) => {
        reject("reason");
    })
    p.then(
        () => {},
    ).then(
        () => {},
    ).then(
        () => {},
    ).catch(
        (data) => {
            console.log("error",data);//error reason
        }
    )
    console.log(p);//Promise {<rejected>: 'reason'}
    ```

  * catch()注意事项
    * catch()必须接受一个函数作为参数，不能是空参数
    * 默认返回return undefined，默认成功状态
    * 当执行完catch之后，后面的then()方法也会继续执行

* resolve()与reject()函数的参数

  * resolve()和reject()的函数的参数都在then()方法里面操作

    * resolve()函数的参数在then()方法的第一个函数参数

      ```js
      let p = new Promise((resolve,reject) => {
          resolve({name:"xiaoming",sex:"nan"});
      })
      console.log(p);//Promise {<fulfilled>: {…}}
      
      p.then(
          (data) => {
              console.log("success",data);
              //success {name: 'xiaoming', sex: 'nan'}
          },
          () => {
              console.log("error");
          }
      )
      ```

    * reject()函数的参数在then()方法的第二个函数参数

      ```js
      let p = new Promise((resolve,reject) => {
          reject(new Error("reason"));
      })
      console.log(p);//[[PromiseState]]: "rejected"Promise {<fulfilled>: {…}}
      
      p.then(
          (data) => {
              console.log("success",data);
          },
          (data) => {
              console.log("error",data);//error Error: reason
          }
      )
      ```

      