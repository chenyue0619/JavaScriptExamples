# 认识JavaScript

**书籍：**

* ES6入门教程：https://es6.ruanyifeng.com/
* 色彩网站：https://flatuicolors.com/

#### 1、JS分为三个部分

ECMA + DOM + BOM = JavaScript

a、ECMAScript：核心语法

b、DOM：文档对象模型(节点树) => document object model

c、BOM：浏览器对象模型 => browser object model

#### 2、JS代码写法规范

* css引入：行内样式/外联样式/内联样式

* js引入：body标签/head标签之前

  * 内联引入：

    ```html
    <script>
        alert("你好！");
    </script>
    ```

  * 外联引入：

    * 使用外联引入js文件，script标签内部定义的代码不会解析
    * 标签文件引入（src全称source）.

    ```html
    <script src="./index.js"></script>
    ```

  * 行内引入（了解）：

    ```html
    <div onclick="alert("你好！")"></div>
    ```

#### 3、js注释

* // -> 单行注释
* /**/ -> 多行注释
* <!----> -> html注释
* /**/ -> css注释

#### 4、js常用调试代码与弹框

* alert("你好！");

* console.log("你好啊！");

* 确认框：confirm("你好！");

  * 确定 -> true
  * 取消 -> false

* 输入框：prompt("提示需要输入的内容：",默认值(可不写));

  ```html
  <script>
  	prompt("请输入一个数字:",7);
  </script>
  ```

  ![1658479801195](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1658479801195.png)

* 解析标签框：document.**write**("<strong>你好！</strong>");

  ```html
  <script>
  	document.write("<strong>你好！</strong>");
  </script>
  ```

#### 5、js注意事项

* 严格区分大小写
* 语法使用英文半角符号
* 缩进对其  一层语义一层缩进
* 分好结尾（非严格要求）

#### 6、script的属性

1、defer：引入外部资源，走到这里（script引入外部文件）会一边下载（script文件）一边解析后面的html代码；

2、async：引入外部资源，走到这里会一边下载一遍解析后面的html内容，走到</html>才开始解析script代码；

3、若下载完script文件在解析则不用加上述两个属性（边下载边解析）；

![1649050688965](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649050688965.png)

#### 7、变量

##### 1、**var声明变量**：

* var与let区别：
  * var存在变量提升且可以重复声明不报错
  * let不存在变量提升，不可以重复声明（可以检查某一变量是否声明过：控制台报错）
* var + a 变量名字=b 等于我们要存储的东西;

 * var：关键字

 * a变量名字：盒子【的柜子里面抽屉（存储东西的地方）】

 * b 等于我们要存储的东西：内容【抽屉里面放的多东西（存在盒子里面的东西）】

 * 一句话要用分号 ; 来结束

 * = ：表示给变量赋值

 * 若赋的值是汉字，要用引号'  ' 代替；

 * 变量名不能重复声明，不然后面的初始化会覆盖前面的值

   ​		初始化：在声明变量时直接赋值

##### 2、**console.log();**：

​	在控制台（console）打印（log）出括号里面的内容

##### 3、**变量的取名规则**

* 禁止使用中文
* 严格区分大小写
* 以字母、下划线（_）、美元符号（$）开头、不可以以数字开头
* 驼峰命名：名字中包含两个单词，从第二个单词首字母开始大写
* 不要重复声明和定义，不要未声明就使用

 * 关键字不能用作变量名
 * 变量名要见名知意
 * 保留字不能用作变量名
 * 常见关键字

![1649052257365](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649052257365.png)

##### 4、定义变量的多个方法

* 定义是直接赋值

* 先定义在赋值

* 同时定义多个变量并且赋值，逗号分隔

  ```html
  <script>
  	let a = 1,
          b = 2,
          c = 3;
      console.log(a,b,c);
  </script>
  ```

#### 8、常量const

* 不允许重复赋值

#### 9、**JS常见报错指令单词**

	* unexpected	没有想到的 
	* token  标点，标记

#### 10、数据类型

* 值数据（简单数据类型）
  * Number(数字)
  * String(字符串)
  * Undefined(undefined)未定义、Null(null)没有对象的空指针、Boolean（布尔值）true false
* 引用数据类型（复杂数据类型）
  * function(函数)
  * array(数组)
  * object(对象)
  * Null(null)：没有对象的空指针，指向空地址

#### 11、语句与表达式

* 语句
  * JavaScript程序的执行以行为单位，一行一行的执行，一般情况下，一行就是一个语句，羽居士为了完成某种任务而执行的操作。
  * 语句是为了完成某种任务而进行的操作。
  * 不需要返回值
* 表达式
  * 一定会返回某一个值