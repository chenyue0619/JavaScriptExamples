# Math的方法

* 定义

  * Math是JavaScript的原生对象，提供各种数学功能，该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用

* 方法

  * Math.abs()绝对值

  * Math.max()最大值

  * Math.min()最小值

    * 传入散列数据，而不是数组

    ```html
    console.log(Math.min(1,2,3,4,4));
    console.log(Math.max(1,2,3,4,4));
    ```

    * 出现一个不是数字或字符串则返回NaN
    * 调用函数apply()的方式，传入函数的参数是一个数组形式

    ```
    console.log(Math.max.apply(null,[1,2,3,4,5]));
    ```

  * Math.pow()平方根

* Math.floor()向下取整

* Math.ceil()向上取整

  * Math方法会自动将字符串转换为数字

* Math.round()

  * 正数 => 四舍五入

  ```html
  console.log(Math.round(1.5));//2
  ```

  * 负数 => 五舍六入

  ```html
  console.log(Math.round(-1.5));//-1
  console.log(Math.round(-1.6));//-2
  ```

  * 四舍五入到小数点后两位 => 扩大

  ```html
  console.log(Math.round(2.3455 * 100) / 100);//2.34
  ```

* Math.pow()平方根

  * Math.pow(2,3) => 2的3次方跟

  ```
  console.log(Math.pow(2,3));//2*2*2 = 8
  ```

* Math.aqrt()开方

* Math.random();
  * 该方法返回的是一个大于等于0并且小于1的随机数
  * [a,b] => Math.random() * (b - a + 1) + a
  * arr[n] n => [a,b] => Math.random() * arr.length
  
* 三角函数方法

  * Math.sin();
  * Math.cos();
  * Math.tan();
  * Math.asin()
  * Math.acos()
  * Math.atan()

* Math.PI()数学中的圆周率