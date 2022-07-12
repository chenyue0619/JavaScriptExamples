# 1、认识JavaScript

#### 1、JS分为三个部分

a、ECMAScript：核心语法

b、DOM：文档对象模型

c、BOM：浏览器对象模型

#### 2、JS代码写法规范

a、body标签，head标签，script标签文件引入（src全称source）.

#### 3、script的属性

1、defer：引入外部资源，走到这里（script引入外部文件）会一边下载（script文件）一边解析后面的html代码；

2、async：引入外部资源，走到这里会一边下载一遍解析后面的html内容，走到</html>才开始解析script代码；

3、若下载完script文件在解析则不用加上述两个属性（边下载边解析）；

![1649050688965](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649050688965.png)

#### 4、变量

1、**var声明变量**：var + a 变量名字=b 等于我们要存储的东西;

 * var：关键字

 * a变量名字：盒子【的柜子里面抽屉（存储东西的地方）】

 * b 等于我们要存储的东西：内容【抽屉里面放的多东西（存在盒子里面的东西）】

 * 一句话要用分号 ; 来结束

 * = ：表示给变量赋值

 * 若赋的值是汉字，要用引号'  ' 代替；

 * 变量名不能重复声明，不然后面的初始化会覆盖前面的值

   ​		初始化：在声明变量时直接赋值

2、**console.log();**：在控制台（console）打印（log）出括号里面的内容

3、**变量的取名规则**

	* 禁止使用中文
	* 严格区分大小写
	* 以字母、下划线（_）、美元符号（$）开头、不可以以数字开头
	* 驼峰命名：名字中包含两个单词，从第二个单词首字母开始大写

 * 关键字不能用作变量名

 * 常见变量名

   ![1649052257365](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649052257365.png)

   *变量名要见名知意

   *保留字不能用作变量名

5、**JS常见报错指令单词**

	* unexpected	没有想到的 
	* token  标点，标记

#### 5、数据

1、简单数据类型：Number(数字)、String(字符串)、Undefined(undefined)未定义、Null(null)没有对象的空指针、Boolean（布尔值）true false