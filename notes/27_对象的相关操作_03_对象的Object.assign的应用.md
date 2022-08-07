# 对象的Object.assign的应用

* 用来合并对象

* 基本语法

  * Object.assign(目标对象，源对象1，源对象2……)

  * 返回值：返回目标对象

  * 相同属性名，后传入的会覆盖掉先传入的

    ```html
    <script>
        let obj1 = {
            name:"xiaoming",
            sex:"nan"
        };
        let obj2 = {
            ex:"nv",
            age:19
        }
        let newObj = Object.assign({},obj1,obj2);
        console.log(newObj);
        //{name: 'xiaoming', sex: 'nv', age: 19}
    </script>
    ```

    