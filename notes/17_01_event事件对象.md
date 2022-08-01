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
* onmousewheel
    * 当鼠标滚轮滚动的时候
    * deltaY
    * 当鼠标向上滚的时候返回负值
      * 当鼠标向上滚的时候返回正值
  
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

### DOM 2级事件 

### addEventListener()绑定事件

* 与0级事件区别
  * 0级事件on***只能监听冒泡阶段

* 语法：

  * dom.addEventListener("事件",function(){},false)

* 参数：

  * 参数1：事件名的字符串（注意，没有on）
  * 参数2：回调函数：当事件触发时，该函数会被执行
  * 参数3：true表示捕获阶段触发，false表示冒泡阶段触发（默认），如果不写，则默认为false

* 注意事项

  * 最内部元素不再区分捕获和冒泡阶段，湖西岸执行写在前面的监听，然后执行后写的监听

  * 如果给元素设置相同的两个或多个同名事件，则DOM 0级写法后面的会覆盖先写的

    ```html
    <div class="wrap">
        
    </div>
    <script>
        let oWrap = document.querySelector(".wrap");
        //DOM 0级事件
        oWrap.onclick = fucntion(){
            console.log(111);
        };
        oWrap.onclick = fucntion(){
            console.log(222);
            //打印222，前面一个被覆盖掉
            //DOM 0 级事件
        }
    </script>
    ```

  * DOM 2级会按顺序执行

    ```html
    <div class="wrap">
        
    </div>
    <script>
        let oWrap = document.querySelector(".wrap");
        oWrap.addEventListener("click",fucntion(){
            console.log(111);
        }
     );
        oWrap.addEventListener("click",fucntion(){
            console.log(222);
        }
     );
     //先打印111，再打印222，
     //按顺序执行,DOM 2级事件
    </script>
    ```

### removeEventListener移出事件

* 语法：
  - dom.removeEventListener("事件",fn())

* 注意

  * 函数function是引用数据类型，所以不能直接将函数体复制在事件参数里面，应先定义，然后直接引用，这样才能保证是同一个函数操作

    ```html
    <div class="wrap">
        
    </div>
    <script>
        let oWrap = document.querySelector(".wrap");
        fucntion fn(){
            console.log(111);
        }
        oWrap.removeEventListener("click",fn);
    </script>
    ```

### event的鼠标位置

* 分类

  * clientX   鼠标指针相对于浏览器(可视页面)的水平坐标
  * clientY   鼠标指针相对于浏览器(可视页面)的垂直坐标
  * pageX    鼠标指针相对于整张页面的水平坐标
  * pageY    鼠标指针相对于整张页面的垂直坐标
  * offsetX  鼠标指针相对于事件源元素(本身)的水平坐标
  * offsetY  鼠标指针相对于事件源元素(本身)的垂直坐标

* 举例

  ```html
  <div class="wrap">
      
  </div>
  <script>
      let oWrap = document.querySelector(".wrap");
      oWrap.onmousemove = function(e){
          console.log("offsetX的值为："${e.offsetX }"offsetY的值为："${e.offsetY })
      }
  </script>
  ```

### event的字符码

* 分类

  * e.charCode字符码

    * 通常用于onkeypress事件中，表示用户输入的字符的“字符码”

    * 表示

      ​        字符            字符码

      数字0~数字9      48~57

      大写字母A~Z      65~90

      小写字母a~z       97~122

  * e.keycode键码

    * 通常用于onkeydown事件和onkeyup中，表示用户按下的按键的"键码"

    * 表示

      ​        按键               字键码

      数字0~数字9         48~57(同charCode键码完全相同)

      字母不分大小写    65~90(同charCode键码的大小写)

      方向键(左上右下)  37、38、39、40

      回车键                    13

      空格键                    32        

      

### 阻止默认事件 e.preventDefault()

* 定义

  * e.preventDefault()方法用来阻止事件的默认动作

* 举例

  ```html
  <div class="wrap"></div>
  <script>
      let oWrap = document.querySelector(".wrap");
      oWrap.addEventListener("click",function(e){
          e.preventDefault();
      })
  </script>
  ```

* 用途
  * onmousewheel()当滚轮滑动时可以阻止页面随之滚动

### 阻止事件继续传播e.stopPropagation()

* 定义
  * e.stopPropagation()方法用来阻止事件继续传播

* 阻止冒泡：

  * 在一些场合，非常有必要切断使劲按继续传播，否则造成页面特效显示出bug

    ```html
    <div class="wrap">
        <div class="box">
    </div>
    <script>
    	let oWrap = document.querySelector(".wrap");
        let oBox = document.querySelector(".box");
        oBox.onclick = function(e){
            e.stopPropagation();
            //当点击oBox元素的时候只会触发oBox元素，不会向外冒泡触发oWrap元素
        }
    </script>
    ```

* 阻止捕获：

  * addEventListener()

    ```html
    <div class="wrap">
        <div class="box">
    </div>
    <script>
    	let oWrap = document.querySelector(".wrap");
        let oBox = document.querySelector(".box");
        oWrap.onclick = function(e){
            e.stopPropagation();
            //当点击oWrap元素的时候只会触发oWrap元素，不会向内捕获触发oBox元素
        }
    </script>
    ```

    

  

