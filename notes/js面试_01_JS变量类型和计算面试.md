# JS变量类型和计算面试

* JS变量类型和计算面试

  * == 运算符

    *  => 会现将运算符两端的变量转换为相同数据类型再比较

    * 除了null之外，其他都一律用===，相当于

      if(obj.a === null || obj.a === undefined){}

  * if语句和逻辑运算

    * truly变量：!!a === true 的变量
    * falsely变量：!!a === false 的变量
    * !!
      * 第一个!会将变量转换为相应的数据类型
      * 第二个!会将变量转换为相应的布尔值

  * 逻辑判断

    * && 遇假则停
    * || 遇真则停
    * !window.xiaoming  => true(一个不存在的变量)

* typeof能判断哪些类型

  * 识别所有值类型（简单数据类型），除了null
  * 识别函数 => function
  * 判断是否是引用类型 => object

* 值类型与引用类型的区别

  * 值类型是按值保存在栈中
  * 引用类型是按地址保存，地址存储在堆中，值存储在栈中，一个对象的修改会反映到另一个对象上面