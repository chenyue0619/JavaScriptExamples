# set

* 定义：

  * set是一个无序且不重复的数据集合
  * 数组是一系列有序的数据集合
    * 创建数组的方法
      * let arr2 = [1,2,3];
      * let arr2 = new Array(1,2,3);

* 语法：

  * let s = new Set();

* 方法属性：

  * 添加add()：

    * 一次只能添加一个数据(数组集合或单个数据)；

    * 支持链式操作，不会有相同的数据

    ```js
    let s = new Set();
    s.add([1,2]).add(2);
    console.log(s);
    ```

    ![1660489857640](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660489857640.png)

  * 判断has()

    * 值数据类型

      ```js
      let s = new Set();
      s.add(3).add(2);
      console.log(s);
      console.log(s.has(3));//true
      console.log(s.has(4));//false
      ```

    * 引用数据类型：通过变量保存对象才可以判断是否有该对象(地址保存)

      ```js
      let s = new Set();     s.add({name:"xiaoming"}).add({sex:"nan"}).add({sex:18});
      
      let obj = {company:"tanzhou"};
      s.add(obj);
      console.log(s);
      console.log(s.has({name:"xiaoming"}));//false
      
      console.log(s.has(obj));//true
      ```

  * 删除delete()

    * 对于删除没有的成员，不会报错

      ```js
      let s = new Set();
      s.add({name:"xiaoming"}).add({sex:"nan"}).add({sex:18});
      
      s.delete(1);
      console.log(s);
      ```

  * 全清clear()

    ```js
    let s = new Set();
    s.add({name:"xiaoming"}).add({sex:"nan"}).add({sex:18});
    
    s.clear();
    console.log(s);//Set(0) {size: 0}
    
    ```

  * 遍历forEach()

    * 接收两个参数：第一个是函数，第二个是this指向

    * item === index，因为Set对象是没有下标无序的数据集合

      ```js
      let s = new Set();
      s.add(3).add(4).add(5);
      s.forEach(function (item,index){
          console.log(item,index);
          console.log(this);
      },document);
      ```

      ![1660490852653](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660490852653.png)

  * 长度size

    * size不是一个函数，不能写成size()

      ```js
      let s = new Set();
      s.add(3).add(4).add(5);
      console.log(s.size);
      ```

      