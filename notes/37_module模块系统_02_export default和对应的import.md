# export default和对应的import

* 导出和导入

  * 导出的东西可以被导入(import)，并访问到

  * 一个模块没有导出，也可以将其导入，会执行导入的文件

    ```js
    import "./js/index.js";//1
    ```

  * 被导入的代码都会执行一遍，也仅会执行一遍

    ```js
    //import和export要用type="module"来加载
    <script type="module">
        // 导入import
        // 只会执行一次
        import "./js/index.js";//1
        import "./js/index.js";
        import "./js/index.js";
    </script>
    ```

* 两种导出导入方法

  * export default导出和对应的import导入

    * 一个模块只能有一个export module

      ```js
      //js代码
      
      // 定义变量
      const name = "xiaoming";
      // 导出变量
      export default name;
      ```

      ```js
      //html代码
      
      // 从文件index.js里面导入name变量
      import name from "./js/index.js";
      // 导出之后就可以访问该变量
      console.log(name);//xiaoming
      ```

    * import导入的对象可以随意起名字，习惯性与导出一样

    * 导出对象种类

      * 变量

      * 函数

      * 匿名函数

        ```js
        //js代码
        
        // 导出匿名函数
        export default function(){};
        ```

        ```js
        //html代码
        
        // 导入匿名函数
        import fn from "./js/index.js";
        // fn是给导出的随意起的名字
        console.log(fn);//ƒ (){}
        ```

      * class类

        ```js
        //js代码
        
        // 导出class类
        export default class Person{};
        ```

        ```js
        //html代码
        
        // 导入类
        import Person from "./js/index.js";
        console.log(Person);//class Person{}
        ```

  * export导出和对应的import导入

    * export导出声明和语句

      ```js
      //js代码
      
      // 导出语句
      export const name = "xiaoming";
      ```

      ```js
      //html代码
      
      // export导出的对象对应的import导入用花括号{}包裹起来
      import {name} from "./js/index.js";
      console.log(name);//xiaoming
      ```

    * 不可以导出匿名语句（函数）

    * 简洁写法，多个一起导出导入

      ```js
      //js代码
      
      class Person{};
      const name = "xiaoming";
      
      export {Person,name};
      ```

      ```js
      //html代码
      
      import {Person,name} from "./js/index.js";
      console.log(Person,name);//class Person{} 'xiaoming'
      ```

    * 取别名 => as

      ```js
      //js代码
      
      class Person{};
      const name = "xiaoming";
      
      export {Person,name};
      ```

      ```js
      import {Person,name as username} from "./js/index.js";
      console.log(Person,username);//class Person{} 'xiaoming'
      ```

    * 整体导入

      * 全部导入 * 

        ```js
        //js代码
        
        class Person{};
        const name = "xiaoming";
        
        export {Person,name};
        export default function(){};
        ```

        ```js
        //html代码
        
        // 整体导出
        import * as obj from "./js/index.js";
        console.log(obj.name);//xiaoming
        console.log(obj.Person);//class Person{}
        ```

      * export default 和export一起导入

        ```js
        //html代码
        
        import fn,{Person,name} from "./js/index.js";
        ```

      * export default 和export分开导入

        ```js
        //html代码
        
        import fn,{Person,name} from "./js/index.js";
        import {Person,name} from "./js/index.js";
        ```

        