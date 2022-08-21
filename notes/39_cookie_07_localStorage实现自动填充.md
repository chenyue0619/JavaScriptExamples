# localStorage实现自动填充demo__137

```js
<form action="#" method="post" id="login">
    姓名：<input type="text" name="username" id="username">
    性别：<input type="text" name="sex" id="sex">
    <button class="btn">登录</button>
</form>
let login = document.querySelector("#login");
let btn = document.querySelector(".btn");
const username = localStorage.getItem("username");

// 如果本地有数据的话，就将本地数据返回给username表单的值
if(username){
    login.username.value = username;
}

btn.addEventListener("click",function(e){
    e.preventDefault();
    // localStorage的值是对象，不需要转换encodeURIComponent()
    localStorage.setItem("username",login.username.value);
    login.submit();
})
```

