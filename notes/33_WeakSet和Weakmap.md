# WeakSet和Weakmap

* WeakSet()

  * 只能放入对象数据类型

    ```js
    let ws = new WeakSet([{a:1}]);
    console.log(ws);
    ```

  * 方法属性

    * 添加add()

      ```js
      ws.add(function(){}).add({b:2});
      console.log(ws);
      ```

    * 删除delete => 对象先用一个变量储存起来
    * has()
    * 不支持size()

  * 弱引用：

    * 变量就算没有被应用也会被垃圾回收机制给回收掉

* WeakMap()

  * 生成键值对的集合，以键值对的形式传入二维数组
  * 方法属性
    * set()
    * get()
    * delete()
    * has()
    * forEach()
  * 弱引用
    * 当某一对象被使用完之后，WeakMap里面的对象也会被垃圾回收机制给回收掉