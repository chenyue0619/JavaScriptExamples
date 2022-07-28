# let和const与var的区别

### 1、let

* **特性**：与var的区别

  * var只有定义在function里面才不会被外部访问到(包括for循环语句)，其余都是全局变量，而let只会在作用域块内{}可以访问到

    ```html
    <script>
        for(var i = 0;i < 3;i++){
            console.log(i);
        }
        console.log(i);//i = 3
        
        for(let j = 0;j < 3;j++){
            console.log(j);
      }
        console.log(j);//undefined
  </script>
    ```

  * **let声明的变量不存在变量提升**：声明之后才能使用，为了就是有一个良好的编码习惯（暂时性死区）

    ```html
    <script>
        console.log(a);//变量a已经被提升到当前作用域的最顶端，变量a是存在的。但是没有赋值，所							以就是undefined
        var a = 0;//var声明的变量存在变量提升，提升在当前作用域的最顶端
        console.log(a);//已经赋值了，所以就可以输出a的值
            
        console.log(b);//在舒适化之前不能接受b
        let b = 0;
        console.log(b);
  </script>
    ```

    ![1650335692396](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650335692396.png)

  * 在同一个作用域里面**let不能重复声明**：所有数据类型都会报错
  
    ```html
    <script>
        var a = 0;
        let a = 8;
        console.log(a);//报错
  </script>
    ```
  
    ![1650335924497](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650335924497.png)

  * 在不同的作用域里面let可以重复声明，不会报错

    ![1650336255384](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650336255384.png)

  * let声明的变量不会挂载在window（全局）上，但是仍在全局里面，也没有存在global里面

    ```html
    <script>
        var fn = function(){};
        console.log(fn === window.fn);//true
    </script>
    ```
  
  ![1650336532806](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650336532806.png)
  
* **块级作用区域**
  
  * 花括号每一个代码块都会形成一个作用域
  
    ![1650336891218](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650336891218.png)
  
  * 如果使用var声明，那么就要加一个立即执行函数才会避免报错，但是let直接加一个花括号包括起来就行了
  
    ![1650337451464](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650337451464.png)
  
    ![1650337480083](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650337480083.png)
  
      ![1650337647797](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650337647797.png)
  
    * for循环：保护for循环体里面的变量，var声明的在循环体外也可以使用，let声明的只能在循环体内使用
  
      ![1650337915232](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650337915232.png)
  
      ![1650337949016](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650337949016.png)
  
  * **暂时性死区**：禁止在声明之前使用
  
    * 块级作用域会先在自身块级寻找变量，如果没有才会找上一层作用域里面的变量（作用域链规则）
  
      ```
      		let a = 0;
              {
                  console.log(a);//会先在自身作用域块内寻找变量，没有了才会找上一级作用域
                  let a = 9;
              }
      ```
  
      ![1650338403524](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650338403524.png)
  
      ![1650338777139](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650338777139.png)
  
  * **for循环作用域**
  
    * for循环小括号也会形成一个块级作用域；
  
    * for循环花括号里面的代码块是小括号作用域下的子作用域
  
    * 在for循环里，代码块因为使用了let声明的i也会形成一个作用域
  
      ```
      		let boxs = document.querySelectorAll(".box");
              for(let i = 0;i < 3;i++){
                  boxs[i].onclick = function(){//点击事件触发后面的函数，形成闭包
                  					//for循环形成多个闭包，在点击之前已经形成闭包
                  					//后续i还会被使用，所以会形成闭包
                      console.log(i);
                  }
              }
      ```

### 2、const[常量]   constant

* **一般声明引用数据类型都用const**

* 必须在定义的时候初始化，而且后期不可以修改值

* 针对基本数据类型，一般不用在引用数据类型

* **常量就是固定的值：不能重新赋值****

  * **只适合简单数据类型：不能改改变数据内容**

  ![1650340542693](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650340542693.png)

  * **不适合复杂数据类型：不能改变地址**，但可以改变数据内容，改变数据内容不会改变地址

    复杂数据类型复制的是地址，只要地址没变，里面的数据内容怎么改变都不会影响

    ![1650340693675](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650340693675.png)

    ![1650340757812](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650340757812.png)

    ![1650340911251](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650340911251.png)

* **声明const常量时必须初始化，会报错**

  ![1650341075292](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341075292.png)1、声明let常量时不初始化不会报错，undefined

  ![1650341121214](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341121214.png)

  2、不能使用自增自减，因为会重新赋值，会报错

  ![1650341251419](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341251419.png)

* **不能变量提升：先声明再使用**

  ![1650341295941](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341295941.png)

* **与let一样会形成块级作用域**

  ![1650341388278](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341388278.png)

* **暂时性死区**

  ![1650341470724](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650341470724.png)

* **不适用for循环**

  assignment to constant variable：赋值给常量变量

  ![1650349745346](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650349745346.png)

* **const声明的变量不会挂载在window全局上面**

  ![1650350262565](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650350262565.png)

![1650350395248](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1650350395248.png)