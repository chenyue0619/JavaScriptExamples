# 使用ajax完成前后端的通信

```js
// 1、创建xhr对象
let xhr = new XMLHttpRequest();

// 2、监听事件，处理响应
xhr.onreadystatechange = function(){
    // readyState  xhr自身的状态码
    if(xhr.readyState !== 4) return;
    // status  http码
    if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
        console.log(xhr.responseText);
        //{"code":200,"data":[{"word":"jsp"},{"word":"js"},{"word":"json"},{"word":"js \u5165\u95e8"},{"word":"jstl"}]}
    }
}

const url = "https://www.imooc.com/api/http/search/suggest?wod=js ./index.html  ./index.txt";
// 3、准备发送请求
xhr.open("GET",url,true);

// 4.发送请求
xhr.send(null);
```

