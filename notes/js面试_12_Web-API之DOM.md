# Web-API之DOM

* 从JS基础知识到Web API

  * JS基础知识，规定语法(ECMS 262标准)
  * JS Web API，网页操作的API(W3C标准)
  * 谦和是后者的基础，两者结合才能真正的实际应用

* JS基础知识

  * 变量的类型和计算
  * 原型和原型链
  * 作用域和闭包
  * 异步和单线程

* JS Web API

  * DOM

    * 题目

      * DOM是那种数据结构
        * 树状结构

      * DOM操作常用的API

        * DOM节点操作
          * 获取DOM节点
          * attribute
          * property
        * DOM结构操作
        * attribute和property

        * 获取
          * 集合：querySelectorAll/getElementsByClassName/getElementsByTagName
          * 单个元素：querySelector/getElementById

      * attr和property的区别(属性)
        * attr
          * getAttribute()
          * setAttribute()
          * 既可以操作DOM已有的属性，也可以操作自定义的属性
        * property
          * 操作DOM已有的属性
        * 两者区别
          * perproty:修改对象属性，不会体现到html结构中
          * attribute:修改html属性，会改变html结构
          * 连这个和都有可能引起DOM重新渲染

      * 一次性插入多个DOM节点，考虑性能

        * 文档碎片

          ![1661111891581](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1661111891581.png)

    * 知识点

      * DOM本质
      * DOM节点操作
      * DOM结构操作
        * 新增/插入节点
          * appendChild()
          * insertBefore()
        * 获取子元素列表，获取父元素
          * childrenNodes
          * parentNode
        * 删除子元素
          * 父节点.removeChild(要删除的子节点)
          * 子节点不能主动删除自己，必须有父节点删除他
        * 移动节点(已有的节点)
          - 新父节点.appendChild(已有父亲的节点)
          - 新父节点.insertBefore(已有父亲的节点，标杆子节点)
      * DOM性能
        * 先拼接字符串，然后再innerHTML转义标签
        * DOM操作非常“昂贵，避免频繁的DOM操作（innerHTML）
        * 对DOM查询做缓存（length）
        * 将频繁操作改为一次性操作（文档碎片）

  * BOM

  * 事件绑定

  * ajax

  * 存储