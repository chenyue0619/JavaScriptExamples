# 4、基础DOM操作（文档对象模型）

### 1、DOM文档对象模型特征

* 允许JS操作html  css

* 页面中的所有html与css都掌握在document手中，都通过document来获取

* document是一个对象

* console.dir(document);dir获取元素的操作和方法

* 特殊元素的获取

  * ```html
    console.log(document.title);
    console.log(document.head);
    console.log(document.body);
    ```

* 获取数组
  * getElementsByClass()
  * getElementsByTagName()
  * querySelectorAll()

* 获取单个元素
  * tag.nth-of-type()
  * class.nth-child()

### 2、querySelector

* **<u>NodeList ： 节点列表</u>**：类数组

* query[查询]Selector[选择器]

* **css选择器怎样写，括号里面就怎样写**

* **类名选择器**：

  * <u>var box = document.querySelector('.box');</u>

  * 多个相同名字的盒子，只会选中第一个

  * 会获取到这个标签内的所有内容，所有标签结构

    ![1649167207331](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649167207331.png)

* **querySelectorAll**

  * 多个相同名字的盒子，会全部选中

  * 变量box就相当于一个数组，跟数组的用法是一样的

    console.log(boxa[1]);//boxa[1]选中的是第二个盒子，数组下标是从0开始的
  
    ![1649221396671](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649221396671.png)
  
  * <u>var box = document.querySelectorAll('.box');</u>
  
    ![1649167258758](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649167258758.png)

* **id选择器**

  * var container = document.querySelector('#container');

    ![1649221895062](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649221895062.png)

  * id选择器不需要先定义变量就可，因为id名可以直接选中以直接选中在控制台输出，但是建议还是先定义再使用，这就是id名唯一的原因

    ![1649221981723](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649221981723.png)

* **后代选择器**（与css写法一样）

  * var big = document.querySelector('<u>**#container .big**</u>');//后代选择器

    ![1649222608098](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649222608098.png)

* **子代选择器**（与css写法一样）

  * var big_a = document.querySelector('<u>**#container>.big**</u>');//子代选择器

    ![1649222636100](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649222636100.png)

* **标签选择器**（与css写法一样，直接在里面写标签名就可以）

  * var box_2 = document.querySelectorAll('div');//box_2变成一个数组,单引号里面的书写跟css选择器一样

    ![1649223033051](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649223033051.png)

* **div.box**

  * var box_3 = document.querySelectorAll('<u>**div.box**</u>');

    ![1649223417408](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649223417408.png)

* **链式操作**

  * 只能用来获取后代元素，不可以获取兄弟元素

  * var box_4 = document**.<u>querySelector('div').querySelector('.big');**</u>

    ![1649223626793](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649223626793.png)

* **<u>总结：所有可以获得.big的方法</u>**

  ```
   <style>
          .box,#container{
              margin: 10px;
              width: 100px;
              height: 100px;
              background-color: red;
          } 
          .box .big{
              margin: 10px;
              width: 50px;
              height: 50px;
              background-color: green;
          }
   </style> 
   <body>
   	<div class="box">
          <div class="big">大盒子</div>
      </div>
   </body>
  
  ```

  ![1649224236234](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649224236234.png)

### 3、getElementsByTagName  (通过标签名来获取)

* <u>HTMLCollection ： **标签集合**</u>：类数组

  *  var box = document.getElementsByTagName('div');

  *  通过此方法获取到的是标签集合，不会获取到标签内容

    ![1649225701246](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649225701246.png)

  * 给数组加下标就可以获取到标签内容了

    console.log(box[0]);

    ![1649225796796](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649225796796.png)

  * 也可以直接写在元素的后面

    var box = document.getElementsByTagName('div')[0];

    ![1649225921794](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649225921794.png)

  * 若页面中没有相应的标签，则会返回undefined

    ![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649226182126.png)

  * 只能写标签名，不能写选择器（div .box）

    ![1649226356830](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649226356830.png)

### 4、geByElementsByClassName  (通过类名来获取)

*  var big =document.getElementsByClassName('big');

  * 直接写类名，不用加  .   

  * 获取到的是标签列表不会获取到内容

    ![1649226899638](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649226899638.png)

  * 写成数组形式才可以获取到标签内容

    ![1649226959078](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649226959078.png)

  * 两个类名之间也不加  .  ，后代/子代选择器

  * 链式操作getElementsByClassName()

    * var big3 =document.getElementsByClassName('box')[0].getElementsByClassName('big');

    ![1649228075454](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649228075454.png)

    * getElementsByClassName获取到的是节点集合，是一个类数组，所以要写下标

    * querySelectorAll()获取到的是节点集合，而querySelector()获取到的是单个节点，

      * var big2 = document.querySelectorAll('div')[0].querySelector('.big');![1649228280268](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649228280268.png)

      * 在用querySelectorAll()写链式结构时一定要写下标，不然会报错，因为querySelectorAl()是返回一个节点列表，是一个数组![1649228379747](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649228379747.png)

      *   也可以用querySelector()写链式结构，获取到的是第一个

        var big4 = document.querySelector('div').querySelector('.big');

        ![1649228563625](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649228563625.png)

* 任何情况下都返回一个数组，即使是一个标签(elements)

  ```html
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <script>
  	let obox = document.getElementsByClassName("box");
      console.log(obox);//obox[]
  </script>
  ```

  ![1658555610125](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1658555610125.png)

* 属性选择器

  * [class ^=b]：选择类名以b开头的元素

  ```html
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <script>
  	let obox = document.getElementsByClassName("[class ^=b]");
      console.log(obox);//obox[]
  </script>
  ```

### 5、getElementById  (通过id名获取)

* var container = document.getElementById('container');

* 直接写id名，不加  #

* getElementById 中element不加s，因为id名唯一

* 获取到的直接是元素以及元素内容，不是一个数组，获取到的是单个元素

  （getElementsByClassName  getElementsByTagName  querySelectorAll）

  ![1649240595198](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649240595198.png)

* 可以直接获取id:任何情况下不建议使用

  ```html
  <div id="wrap"></div>
  <script>
      console.log(wrap);
  </script>
  ```

### 6、getElementsByName

* 按照规范name属性名唯一，所以尽量不用getElementsByName来获取表单

  ![1649241229435](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649241229435.png)

### 7、比较  query  get

* **query**
  * NodeList [节点列表]
  * 输出包括标签以及标签里面的内容
  * CSS选择器
  * 可以进行链式操作
* **get**
  * HTMLCollection [标签集合]
  * 输出只有标签，不包括标签里面的内容
  * 标签，类名，ID名，name名
  * 可以进行链式操作

* 两种操作可以混合使用，因为获取到的是标签，而跟获取到标签的方式没有关系

  * var big = document.querySelector('.box').getElementsByClassName('big');

    ![1649241986263](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649241986263.png)

* ![1649247535684](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649247535684.png)

* **有些标签可以直接获取，不需要使用dom对象**

  * body -> document.body

  * html -> document.documentElement（一个html文件只有一个html标签，所以是单数）

    ![1649248071718](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649248071718.png)

### 8、innerHTML (获取标签里面所有的html结构)

* **<u>获取到的是所选标签内部的所有结构，包括标签以及文本内容</u>**

* ```
  var box = document.querySelector('.box');
  console.log(box.innerHTML);
  ```

  ![1649242724961](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649242724961.png)

* **<u>box.innerHTML为字符串  ' '</u>**

  ![1649242801562](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649242801562.png)

* **修改标签结构**

  * 会在页面展示修改之后的结构内容，但是在代码结构中不会修改，还是原来修改之前的样子

    ![1649243257063](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649243257063.png)

  * 可以一个变量，让var box1 = box.innerHTML;结果一样

![1649243386837](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649243386837.png)

* **添加标签结构**

  * 要先获取到这个标签，然后才可以对这个标签进行操

    var box2 = document.querySelector('.box');

  * **字符串拼接**：box2.innerHTML += '<div>大盒子4新添加</div>';//字符串拼接

    ![1649243954562](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649243954562.png)

* **删除标签结构**

  * 减法运算时会进行Number()转换

  * 加法运算时会进行String()转换

  * 两个字符串进行减法运算时，会先转换为数字NaN

  * 所以没有删除标签结构这一回事，会返回NaN

    ![1649244708685](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649244708685.png)

* **清空字符串**

  * 直接赋值空字符串或者none；

     box4.innerHTML = "";//清空标签内容

    ![1649245298245](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649245298245.png)

### 9、innerText  (标签里面的文字，会主动过滤掉标签)

* **console.log(big1.innerText);**

  ![1649245706032](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649245706032.png)

  

* **添加文字内容（字符串拼接  +=  ）**

  big1.innerText += 'hello world !';

  ![1649245866810](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649245866810.png)

* 只解析一个空格，与html一样，&nbsp也不会转义

  ![1649246190536](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649246190536.png)

* 不会转义标签，会直接当做文本字符串输出打印

  ![1649246100355](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649246100355.png)

### 10、childNodes(获取儿子节点)【文本节点+元素节点】

* var sonList = box.childNodes;

  ![1649248831002](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649248831002.png)

* **text  [文本节点]**：**<u>换行符</u>**会被解析为一个控的文本节点，所以获取到的节点集合长度是（换行符+标签）

* **修改标签文本内容**

  * sonList[1].innerText= "我是新修改的文字" ;

    ![1649249972691](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649249972691.png)

  * type  [文本节点]：不可以修改换行符被解析为文本节点之后的文本内容，因为不是文本元素，所以不可以使用innerText去修改，他只是被解析为文本的换行符，但实际上并不是文本元素

    sonList[0].innerText= "我是新修改的文字" ;

    ![1649249920083](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649249920083.png)

  * 用处很少

### 11、children[元素节点]

* 只会获取到元素节点，不会获取到文本（由换行符解析出来的）节点

  ![1649250304507](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649250304507.png)

* 节点获取到节点（类数组），不会获取到标签里面的内容

### 12、previousSibling  [上一个兄弟元素]

* previous [上一个] Sibling [兄弟]

*  var first = second.previousSibling;

* 会获取到被解析为文本的换行符，相当于childNode类数组【换行符文本节点+元素节点】

  ![1649251573331](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649251573331.png)

### 13、previousElementSibling[上一个兄弟元素]

* var first1 = second.previousElementSibling;

* CSS不可以选中上一个兄弟元素，JS可以实现previousElementSibling

* 只会获取到元素节点，相当于children【元素节点】

  ![1649251862440](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649251862440.png)

### 14、nextElementSibling[下一个兄弟元素]

* nextElementSibling：下一个兄弟元素，nextSibling很多时候获取到的是文本节点（换行符）

  ![1649251840162](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649251840162.png)

* **链式结构获取不相连的兄弟元素**

  * var third = first.nextElementSibling.nextElementSibling;

    ![1649252180032](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649252180032.png)

  * <u>由此dom元素获取到的是对象Object，而不是字符串</u>

    ![1649252585745](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649252585745.png)

### 15、parentNode[父亲节点]

* CSS不可以通过子元素获取父元素，JS可以  parentNode

* 获取父元素，不只是元素，包括标签内容

  ![1649252940229](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649252940229.png)

### 16、parentElement[父元素]

* var box2 = son.parentElement;

  ![1649253156815](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649253156815.png)

* parentNode与parentElement返回的值相同，一模一样，因为获取到的是同一个元素，不会像childNode与children似的，获取到文本节点（换行符转义成的文本节点）===返回true

  ![1649253249738](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649253249738.png)

### 17、nodeName[节点名称]

* console.<u>dir</u>(second.nodeName);

* 标签节点名称会打印出来大写，在HTML里面大小写没有明显区分

* console.<u>dir</u>(box1.childNodes[0].nodeName);

  ![1649308446902](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649308446902.png)

### 18、nodeType[节点类型]

* 标签节点类型  ->  1

  console.<u>dir</u>(second.nodeType);//div -> 1  标签   dir【展开】

* 文本节点类型  ->  3

  console.<u>dir</u>(box1.childNodes[0].nodeType);//#type  ->  3   文本节点

  ![1649308659129](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649308659129.png)

### 19、createElement('标签名')  [创造标签]

* 创造新的标签，在内存(控制台)中，不在页面暗中显示；

* var div = document.createElement('div');

  ![1649309943468](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649309943468.png)

### 20、appendChild(标签名)

* appendChild   [附加子项]，append[附加]

* 往标签里面添加新的标签

* **会显示在页面中**

* 一次只能添加一个标签，若添加多个则会只添加第一个

* container.appendChild(div);//会显示在页面中

  ![1649310297280](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649310297280.png)

* 可以直接操作在标签里面添加内容（标签，文本）；

  * 添加文本：div.innerText = "我是新增的div标签";

  ![1649310660062](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649310660062.png)

  * 添加标签：div.innerHTML = "<p>我是新添加的div标签里面的标签内容</p>";

    ![1649310881940](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649310881940.png)

* **appendChild()可以返回，因为操作的是一个元素**，而且还可以继续操作，innerHTML/innerText

  ![1649311596701](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649311596701.png)

### 13、append  [添加新标签]

* **一次可以添加多个标签**

* container.append(div,p);

  ![1649311345490](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649311345490.png)

* **append()不会返回，输出undefined**

  * 因为操作的是多个元素，不可以继续操作innerHTML/innerText，如果继续操作做的话，多个元素就会不知道具体操作返回的是哪一个

  ![1649311536682](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649311536682.png)

### 14、insertBefore(新元素,老元素)

* box.insertBefore(div,box.children[1]);

  ![1649313511107](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649313511107.png)

### 15、replaceChild[替换子元素]

* 父元素 . replaceChild (新元素,子元素)

* box.replaceChild(div,box.children[1]);

  ![1649313842453](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649313842453.png)

### 16、removeChild[删除元素]

* 父元素 . removeChild(要删除的元素)

* box.removeChild(box.children[2]);

  ![1649314015915](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649314015915.png)

### 17、removes[删除所有元素]

* 不经常用

### 18、createDocumentFragment()

* 用来保存多个JS创建的标签，然后一次性添加进文档中

* 先把box1和box2添加进碎片里面，然后再把碎片添加进文档里面

* 可以达到节省性能的目的

* 在一个父级标签里面添加多个子标签，把文档碎片用上

  ```
  
      var container = document.querySelector('.container');
      var div = document.createElement('div');//创建新的标签div，在内存中不会再页面中显示
      var p = document.createElement('p');
      var fragment = document.createDocumentFragment();//创建一个碎片
      fragment.append(div,p);//把新建的标签放进碎片里面
      container.appendChild(fragment);
      console.log(container);
  ```

  ![1649315160605](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649315160605.png)

### 19、className(对类名进行操作)

* **修改类名**：box.className = 'bigbox';//修改类名

  ![1649318484076](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649318484076.png)

* **增加类名**：box.className += ' some';//添加类名

  ![1649318511170](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649318511170.png)

* 不经常使用

### 20、classList(类名列表)

* console.dir(box.classList);//获取类名列表，所有类名

![1649318742993](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649318742993.png)

* 可以对其中的类名进行更改

* **classList的方法**，只能对类名列表使用

  * **contains('');**  查询是否包含该类名

    * console.log(box.classList.contains('some'));//true

      ![1649319252591](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649319252591.png)

  * **add('');**  增加类名

    * box.classList.add('add');//增加类名

    * 会直接加上空格，不然会报错，即使是同时添加多个类名

      ![1649319453237](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649319453237.png)

    * 若想同时添加多个类名，不可以用空格隔开，可以添加逗号隔开，每个类名要用引号括起来

      * box.classList.add('add','add1');//逗号隔开添加多个类名

        ![1649319740743](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649319740743.png)

  * **remove('');  删除类名**

    * box.classList.remove('add');

      ![1649319925667](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649319925667.png)

    * 可以删除多个

      * box.classList.remove('add','add1');

        ![1649320023471](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649320023471.png)

  * **toggle('');  开关：有就删除，没有就添加**

    * box.classList.toggle('add');//原来有，删除

      ![1649320318475](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649320318475.png)

    * box.classList.toggle('small');//原来没有，添加

      ![1649320398450](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649320398450.png)

    * 可以实现收起效果，有就添加/没有就删除

      ```html
    <style>
          .small{
              width:100px;
              height:100px;
              background-color:orange;
          }
          .big{
              width:200px;
              height:200px;
              background-color:blue;
          }
      </style>
      <body>
          <div class="small"></div>
          <script>
              let small = document.querySelector(".small");
              small.onclick = function(){
                  this.classList.toggle("big");
              }
          </script>
      </body>
      ```
  
      
  
  * replace('旧类名','新类名');   替换**
  
    * box.classList.replace('add' , 'big');
  
      ![1649320637053](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649320637053.png)

### 21、操作元素的css样式

* **操作元素的合法属性**

  * 元素的所有合法属性都可以修改

  * 原本是什么类型(typeof)，等号后面也要写什么类型

  * img.height = 500;

  * 所有元素都有title属性

    ```html
    <div>1</div>
    <script>
        let odiv = document.querySelector("div");
        odiv.title = "我很好！";
        odiv.className="box";
    </script>
    ```

    ![1658562084050](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1658562084050.png)

* **操作元素的不合法属性（自定义属性）**

  * getAttribute()          获取

  * setAttribute()          设置

  * removeAttribute()  删除

    ```html
    <div mingzi="小王" age="13"></div>
    <script>
        let odiv = document.querySelector("div");
        console.log(odiv.getAttribute("mingzi"));
        odiv.setAttribute("mingzi","大林");
        console.log(odiv.getAttribute("mingzi"));
        odiv.removeAttribute("age");
        console.log(odiv);
    </script>
    ```
  
    ![1658562579036](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1658562579036.png)
  
  * 也可以操作元素的合法属性，操作方式同上
  
* 获取到的是行内样式：无法通过元素style属性去获取元素写在CSS里面的样式，**

  * console.log(box.style.height);//只能获取到行内样式

    ![1649323623540](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649323623540.png)

  * box.style.height    此种写法获取到的是**字符串**，用typeof检查一下就知道

    ![1649323751875](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649323751875.png)
  
  * box.style.background-color = 'red';//报错，因为在JS中，- 表示减号
  
    ![1649330814435](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649330814435.png)
  
  * 驼峰手段来写box.style.**backgroundColor** = "red";
  
  * 若报错，那可以通过打印盒子样式列表来查看如何来写
  
    **console.dir(box.style);**
  
    ![1649331028561](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649331028561.png)
  
  * 可以通过style同时设置多条样式，但还是建议使用cssText
  
     box.style = "width:400px;height:400px;background-color:orange"
  
* **cssText [设置CSS属性]**

  * 通过此元素可以同时设置多条CSS样式【行内样式】

  * box.style.cssText = "width:400px;height:400px;background-color:orange";

    ![1649331509763](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649331509763.png)

  * 若需要换行，则  \

    ![1649331651427](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649331651427.png)

  * 可以通过 += 加多的样式，但是直接用style就不可以实现此功能

    box.style.cssText += "margin:100px";

    ![1649332112118](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649332112118.png)

    ![1649332132740](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649332132740.png)

  * **删除属性（某一个行内样式）**

    *  <u>直接赋值为空就行</u>

      box.style.backgroundColor = "";

      ![1649332410239](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649332410239.png)

    * box.style.removeProperty("width");

      ![1649332855608](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1649332855608.png)

* 通过类名className操作css样式

  ```html
  <style>
      #wrap{
          width:100px;
          height:100px;
          background-color:orange;
      }
      /*代表交集*/
       #wrap.active{
          width:200px;
          height:200px;
          background-color:green;
      }
  </style>
  <body>
      <div id="wrap"></div>
      <script>
  		let owrap = document.querySelector(".wrap");
          owrap.onclick = function(){
              this.className = "active";
          }
      </script>
  </body>
  ```

### 总结

1、**获取标签**：query[]querySelector querySelectorAll get[getElementById  getElementByClassName  getElementsByTagName getElementsByName]

2、**获取标签内容**：innerHTML innerText

3、**子元素**：children[标签]  childNodes[文本节点+标签节点]

4、**父亲元素**：parentNode ===parentElement

5、**兄弟元素**：previousElementSibling[上一个兄弟元素]  nextElementSibling[下一个兄弟元素]：获取到的是标签内容

​                        * previousSibling[上一个兄弟节点]  nextSibling[下一个兄弟节点]：可能会获取到文本节点

6、**创造标签**：createElement

7、**添加标签**：appendChild()[只能添加一个]  

​                       * append()[可以添加多个]:碎片：fragment  document.createDocumentFragment()[相对于文本来说的，可以提高文本性能]

8、**插入标签**：insertbefore(新标签,老标签)[在标签之前插入新标签]

9、**删除标签**：remove()[删除所有标签]  removeChild()[删除子标签元素]

10、**替换标签**：replaceChild(新元素,旧元素)[替换子元素]

11、**类名操作**：classList   :add('')   remove('')  replace('旧类名','新类名')  contains('')  toggle('')

12、**CSS操作**：行内样式style   cssText=""  removeProverty   /  ""（删）