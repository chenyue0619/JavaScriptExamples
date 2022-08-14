# Map初识

* 定义：

  * Map是键值对的集合

* 语法：

  * 对象：

    ```js
    let obj = {
        name:"xiaoming",
        sex:"nan",
        age:19
    }
    ```

  * new Map()

    ```js
    let m = new Map();
    m.set("name","xiaoming");
    m.set("sex","nan");
    console.log(m);//Map(2) {'name' => 'xiaoming', 'sex' => 'nan'}
    ```

  * 两者区别

    * 对象属性名。不可以不合法

      * 不可以是对象
      * 不可以是关键字，关键字会解析为字符串变量名

    * Map属性名，可以不合法

      * 可以是对象
      * 可以是关键字，还是关键字

      ```js
      let m = new Map();
      m.set("name","xiaoming");
      m.set("sex","nan");
      m.set(true,1);//{true => 1}
      m.set({},"object");//{…} => 'object'
      m.set(undefined,"undefined");//{undefined => "undefined"}
      m.set(new Set(),"undefined");//{Set(0) => "undefined"}
      ```

      