# iterator接口的使用场合

* 数组的展开运算符

  * 原生可遍历就可以使用展开运算符
  * 对象只能在对象里面展开

* 数组的解构赋值

  * 相当于现将对象(数组、字符串)展开，然后再放进数组[]里面

    ```js
    let str = "dsjfh";
    [a,b] = str;
    console.log(a,b);//d s
    ```

* Set和Map的构造函数

  * 只要参数的数据类型拥有iterator接口，就可以传参
  * Map要满足原生可遍历的二维数组

* for of

  * 原生可遍历内容(for of)
    * 数组
    * 字符串
    * arguments
    * NodeList
    * Set
    * Map
  * 原生不可遍历
    * 普通对象
    * 类数组