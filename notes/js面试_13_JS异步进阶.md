# JS异步进阶

* 请描述event loop（事件循环/事件轮询）的机制，可画图

* 什么是宏任务和微任务，两者有什么区别？

* Promise有哪三种状态？如何变化？

* 场景题

  * promise then和catch的连接

    * 第一题demo__148.html

    ```js
    // Promsie.resolve()直接创建一个成功状态的Promise对象
    Promise.resolve()
        .then(() => {
        console.log(1);
    })
        .catch(() => {
        console.log(2);
    })
        .then(() => {
        console.log(3);
    })
    //控制台打印出1 3
    ```

    * 第二题demo__149.html

    ```js
    Promise.resolve()
        .then(() => {
        console.log(1);
        throw new Error("error1");
    })
        .catch(() => {
        console.log(2);
    })
        .then(() => {
        console.log(3);
    })
    // 控制台 1  2  3 
    ```

    * 第三题demo__150.html

    ```js
    Promise.resolve()
        .then(() => {
        console.log(1);
        throw new Error("error1");
    })
        .catch(() => {
        console.log(2);
    })
        .catch(() => {
        console.log(3);
    })
    //控制台  1  2
    ```

  * async/await语法

    * 第一题demo__151.html

    ```js
    async function fn(){
        return 100;
    }
    (async function(){
        const a = fn();
        const b = await fn();
    })();
    ```

    * 第二题demo__152.html

    ```js
    (async function(){
        console.log("start");//start
        const a = await 100;
        console.log("a",a);//a 100
        const b = await Promise.resolve(200);
        console.log("b",b);//b 200
        const c = await Promise.reject(300);
        console.log("c",c);
        console.log("end");
    })();//Uncaught (in promise) 300
    //控制台
    ```

  * promise和setTimeout的顺序demo__153.html

    * promis大于setTimeout

    ```js
    console.log(100);
    setTimeout(() => {
        console.log(200);
    });
    Promise.resolve().then(() => {
        console.log(300);
    });
    console.log(400);
    //控制台 100  400  300  200
    ```

    

  