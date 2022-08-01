# event事件对象

### event事件对象

概念：

* 用户与网页的交互动作

* 分类：
  * 当用户点击元素时
  * 当鼠标移动到元素上时
  * 当文本框的内容被改变时
  * 当键盘的内容被改变时
  * 当键盘在文本框中被按下时
  * 当页面加载完毕时
* 监听
  * 概念：计算机随时能够发现这个事件发生了，从而执行程序员预先编写的一些程序
* DOM 0级事件
  * on****属性

### 鼠标事件(dom 0级事件)

* 分类

  * onclick                 
    *  当鼠标单击某个对象

  * ondblclick            
    * 当鼠标双击某个对象

  * onmousedown
    * 当某个鼠标按键在某个对象上被按下

  * onmouseup
    * 当某个鼠标按键在某个对象上被松开

  * onmousemove
    * 当某个鼠标按键在某个对象上被移动

  * onmouseenter
    * 当鼠标进入某个对象（相似事件onmouseover）

  * onmouseleave
    * 当鼠标离开某个对象（相似事件onmouseout）

* 执行顺序

  * onmousedown => onmouseup => onclick

### 键盘事件

* 分类：
  * onkeypress
    * 当某个键盘的键被按下
    * 系统按钮如箭头键和功能键无法得到识别
  * onkeydown
    * 当某个键盘的键被按下
    * 系统按钮可以识别，并且会先于onkeypress发生
  * onkeyup
    * 当某个键盘的键被松开

### 表单事件

* 分类
  * onchange
    * 当用户改变域的内容
  * onfocus
    * 当某元素获得焦点（比如tab键或鼠标点击）
  * onblur
    * 当某元素失去焦点
  * onsubmit
    * 当表单被提交
  * onreset
    * 当表单被重置

### 页面事件监听

* 分类
  * onload
    * 当页面或图像被加载完成
  * onunload
    * 当用户退出页面