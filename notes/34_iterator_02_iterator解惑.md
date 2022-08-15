# iterator解惑

* 遍历数组
  * for循环
  * forEach方法
    * 不能使用break以及return
* 遍历对象
  * for in循环
    * 不仅会遍历数组中的元素，还会遍历自定义的属性
    * 原型上的属性甚至都会被访问到
    * 遍历数据元素的顺序可能是随机的
* for of循环的好处
  * 比for循环简洁，弥补了forEach和for in循环的短板
  * 与forEach相比，可以正确响应break/continue/return
  * 支持数组、字符串遍历，还支持大多数类数组对象，DOM，NodeList
  * 支持Map和Set对象遍历
  * 数组、字符串、arguments、NodeList、Set、Map

* for of 本质是iterator

  * let it = arr\[Symbol.iterator]()
  * it.next()

  

  