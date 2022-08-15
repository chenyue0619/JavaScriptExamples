# iterator初识

* 定义：

  * iterator遍历，迭代器
  * for(){}
  * [].forEach(() => {})   new Set/Map.forEach(() => {});

* 位置

  * arr\[Symbol.iterator]()

    ```js
    let arr = [1,2,3];
    let it = arr[Symbol.iterator]();
    console.log(it);//Array Iterator {}
    ```

    * Symbol.iterator可遍历对象的生成方法

    * 返回一个对象it

    * 属性方法(绑定在对象it上面)

      * next() => value代表值，done代表是否执行完全

        ```js
        console.log(it.next());
        //{value: 1, done: false}
        
        console.log(it.next());
        //{value: 2, done: false}
        
        console.log(it.next());
        //{value: 3, done: false}
        
        console.log(it.next());
        //{value: undefined, done: true}
        ```

      * true表示已经遍历完全