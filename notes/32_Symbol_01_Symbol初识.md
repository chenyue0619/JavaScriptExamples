# Symbol初识

* 定义：

  * ES6引入的一种新的原始数据类型，
  * 表示独一无二

* 语法

  * let s = Symbol();

    ```js
    let s1 = Symbol();
    let s2 = Symbol();
    console.log(s1,s2);//ymbol() Symbol()
    console.log(s1 === s2);//false
    ```

  * 参数：接收一个字符串作为参数，表示对Symbol实例的描述以便区分

* 属性方法

  * Symbol.for()

    * 接收一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值

    * 如果有就返回这个Symbol值

    * 如果没有就新建一个以该字符串为名称的Symbol值，并将其注册到全局。

      ```js
      let s1 = Symbol("foo");
      let _s1 = Symbol.for("foo");
      let s2 = Symbol.for("foo2");
      console.log(s1);//Symbol(foo)
      console.log(_s1);//Symbol(foo)
      console.log(s2);//Symbol(foo)
      ```

  * Symbol.keyFor()

    * 判断某个字符串有没有被全局登记

    * 有的话返回该字符串

    * 没有的话返回undefined

      ```js
      console.log(Symbol.keyFor(s2));//foo2
      console.log(Symbol.keyFor(s1));//undefined
      ```

* 用处

  * Symbol就是为了对象的属性名而生，保证同名属性不会被覆盖

    ```js
    let s1 = Symbol("eat");
    let s2 = Symbol("eat");
    
    let person = {
        eyes:"two",
        nose:"one",
        [s1]:"apple",
        [s2]:"banana"
    }
    console.log(person);
    //{eyes: 'two', nose: 'one', Symbol(eat): 'apple', Symbol(eat): 'banana'}
    ```

  * 获取[s1]

    ```js
    console.log(person[s1]);//apple
    ```

  * 遍历

    * Symbol属性遍历：Object.getOwnPropertySymbols();

      ```js
      console.log(Object.getOwnPropertySymbols(person));
      //[Symbol(eat), Symbol(eat)]
      ```

    * 所有属性遍历：Reflect.ownKeys()

      ````js
      console.log(Reflect.ownKeys(person));
      // ['eyes', 'nose', Symbol(eat), Symbol(eat)]
      ````

* 消除魔术字符串

  * 当我们只需要对象的属性而不需要属性值时，可以将属性值用Symbol()代替

    ```js
    let fruits = {
        apple:Symbol(),
        grape:Symbol(),
        banana:Symbol()
    }
    let judge = (type) => {
        let result = 0;
        switch(type){
            case fruits.apple:
                result = 1;
                break;
    
            case fruits.grape:
                result = 2;
                break;
    
            case fruits.banana:
                result = 3;
                break;
    
        }
        return result;
    }
    console.log(judge(fruits.apple));//1
    ```

    