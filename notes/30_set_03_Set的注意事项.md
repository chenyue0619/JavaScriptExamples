# Set的注意事项

* NaN === NaN

  * 正常情况下

    ```js
    console.log(NaN === NaN);//false
    ```

  * 数组的includes()方法

    ```js
    let arr = [NaN];
    console.log(arr.includes(NaN));//true
    ```

  * new Set()

    ```js
    let s = new Set([NaN,NaN,2]);
    console.log(s);// {NaN, 2}
    console.log(s.has(NaN));//true
    ```

* 对象不去重

  * 引用数据类型

    ```js
    let s = new Set();
    s.add({a:1}).add({a:1});
    console.log(s);//Set(2) {{…}, {…}}
    ```

* 使用Set的情况
  * 数组或字符串去重时
  * 不需要通过下标访问，只需要遍历时
  * 为了使用Set提供的方法和属性时(add/delete/clear/size/has/forEach等)