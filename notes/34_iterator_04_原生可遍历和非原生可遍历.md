# 原生可遍历和非原生可遍历

* 可遍历
  * 只要有Symbol.iterator方法，并且这个方法可以生成可遍历对象，就是可遍历的，具备iterator接口
  * 只要是可遍历的，就可以使用for of循环来统一遍历

* 原生可遍历对象

  * 数组

    ```js
    let arr = [1,2,3];
    for(let item of arr){
        console.log(item);
    }
    ```

  * 字符串

    ```js
    let str = "dsjh";
    for(let s of str){
        console.log(s);
    }
    ```

  * arguments => 箭头函数没有arguments

    ```js
    let fn = function() {
        for(let a of arguments){
            console.log(a);
        }
    }
    fn(1,2,3);
    ```

  * NodeList

    ```html
    <body>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </body>
    <script>
        let aP = document.querySelectorAll("p");
        for(let p of aP){
            console.log(p);
        }
    </script>
    ```

  * Set

    ```js
    let s = new Set([1,2,3,4]);
    for(let i of s){
        console.log(i);
    }
    ```

  * Map

    ```js
    let m = new Map([["name","xioaming"],["sex","nan"]]);
    for(let i of m){
        console.log(i);
    }
    ```

* 非原生可遍历

  * Object普通对象

  * 给对象封装一个iterator接口就可以使用for of循环遍历了

    ```js
    // 定义一个普通的对象
    let obj = {
        name:"xiaoming",
        sex:"nan"
    }
    
    // 给对象绑定iterator接口，就会有next()方法
    obj[Symbol.iterator] = () => {
        let index = 0;
        //返回next方法，迭代的重要部分
        return {next(){
            //每次迭代都要+1，执行下一次迭代
            index++;
            if(index === 1){
                //返回的就是迭代的内容，对象的内容(属性值以及是否迭代完的布尔值)
                return {
                    value:obj.name,
                    done:false
                };
            }else if(index === 2){
                return {
                    value:obj.sex,
                    done:false
                };
            }else{
                return {
                    value:undefined,
                    done:true
                };
            }
        }};
    }
    let it = obj[Symbol.iterator]();
    console.log(it.next());//{value: 'xiaoming', done: false}
    console.log(it.next());//{value: 'nan', done: false}
    console.log(it.next());//{value: undefined, done: true}
    
    // 现在就可以使用for of循环遍历了
    for(let item of obj){
        console.log(item);
    }
    ```

  * 类数组对象

    * 借用数组构造函数上面的iterator接口，然后在使用for of 循环遍历

      ```js
      //重点语法
      obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
      for(let o of obj){
          console.log(o);
      }
      ```

    * 在对象上面绑定一个iterator接口，然后在使用for of 循环遍历

      ```js
      obj[Symbol.iterator] = () => {
          //定义一个计数器
          let index = 0;
          //返回一个next方法
          return {
              next(){
               //返回对象的内容以及是否迭代完全的布尔值
                  return {value,done}
              }
          }
      }
      //定义一个接口对象
      let it = obj[Symbol.iterator]();
      it.next();
      it.next();
      ……
      ```

      