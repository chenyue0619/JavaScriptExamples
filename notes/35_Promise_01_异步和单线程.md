# 异步和单线程

* 单线程

  * 定义：
    * JS是单线程语言，只能同时做一件事儿
    * JS和DOM共用同一个线程，因为JS可修改DOM结构

* 异步：

  * 同步会阻塞代码执行

    ```js
    // 单线程alert
    console.log(1);
    alert("2");
    console.log(3);
    ```

  * 异步不会阻塞代码执行

    * 定时任务：setTimeout()/setInterval()
    * 网络请求：ajax、图片加载
    * DOM点击事件

    ```js
    // 异步setTimeout()/setInterval()
    console.log(1);
    setTimeout(() => {
        console.log(2);
    },1000)
    console.log(3);
    //1  3   2
    ```

    ```js
    // 异步DOM点击事件
    let div = document.querySelector("div");
    div.onclick = () => {
        console.log(1);
    }
    ```

    