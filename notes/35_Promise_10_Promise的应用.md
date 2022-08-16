# Promise的应用

* 异步加载图片

```js
// 手写一个Promsie异步加载图片
// 第一步，回调函数，将图片的url作为参数
const loadImg = (url) => {
    // 第二步返回一个Promise对象，这样返回操作目的是每次调用回调函数都可以实行.then()
    return new Promise((resolve,reject) => {
        // 第三步创建一个img元素，将src的值设置为url
        let newImg = document.createElement("img");
        // 对于图片的src属性不用挂载在style上面
        newImg.src = url;

        // 第四步编写执行成功的代码
        newImg.onload = () => {
            resolve(newImg => console.log(1));
        }

        // 第五步编写加载失败代码
        newImg.onerror = () => {
            reject(new Error(`Could not load Image at ${url}`));
        }

    })
}

// 第六步：调用回调函数
loadImg("./images/1/jpg")
// 第七步，执行.then()
    .then((img) => {
    console.log(img);
    console.log(img.width);
    // document.body.appendChild(img);

    // 第八步：返回return 回调函数并传参，这一步保证可以继续调用回调函数
    return loadImg("./images/2.jpg");
})
    .then((img) => {
    // document.body.appendChild(img);

})
```

