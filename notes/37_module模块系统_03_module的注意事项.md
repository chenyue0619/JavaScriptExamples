# module的注意事项

* 模块顶层的this指向undefined

  ```js
  //js代码
  
  console.log(this);//undefined
  ```

* import命令具有提升效果，会提升到整个模块的头部，率先执行

  ```js
  //js代码
  
  console.log(1);
  ```

  ```js
  //html代码
  
  console.log(2);
  console.log(3)
  import "./js/index.js";
  //打印结果1 2 3
  ```

* import和export命令只能在模块的顶层，不能再代码块中执行

  ```js
  //html代码
  
  //禁止这样使用
  if(a){
      import "";
  }
  if(b){
      import "";
  }
  ```

* import()可以按条件导入  成功返回promise

  ```js
  //html代码
  
  if(a){
      // import()会返回一个promise对象
      import("a.js").then(() => {});
  }
  if(b){
      import("b.js").then(() => {});
  }
  ```

* 导入导出的复合写法

  * 复合写法在当前模块无法使用

    ```js
    //html代码
    
    export {name} from "./js/index.js";
    
    // 等价于 => 先导入再导出
    
    import {name} from "./js/index.js" ;
    export {name};
```
    
  
  
  