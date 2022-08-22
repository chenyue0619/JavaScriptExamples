# XHR的事件

* load事件

  * 只监听成功状态

    ```js
    //onreadystatechange每一个状态都会监听，所以要判断xhr的状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
            // 接收到的是JSON格式的数据
            // 打印出来的也是JDON格式的数据
            console.log(xhr.responseText);
            // console.log(JSON.parse(xhr.responseText));
            //{username: 'xioaming', sex: 'female', age: 19}
        }
    }
    
    ===>
       
    //只监听成功状态，只有当xhr.readyState === 4成功状态的时候才会执行此操作
    xhr.addEventListener("load",function(){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
            xonsole.log(xhr.responseText);
        }
    })
    ```

* error事件

  * 请求发生错误时触发

    ```js
    xhr.addEventListener("error",() => {
        console.log(error);
    })
    ```

* abort()事件

  * 调用abort()终止请求时触发

  * IE10开始支持

    ```js
    xhr.addEventListener("abort",() => {
        console.log("abort");
    })
    ```

* timeout()事件

  * 请求超时时触发

    ```js
    xhr.addEventListener("timeout",() => {
        console.log("timeout");
    })
    ```

    