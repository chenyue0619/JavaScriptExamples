# Saas配置以及使用

* 插件：Live Sass Compiler

* 解析转化：

  * 后缀名.scss 
  * 编辑器右下角Watch Sass将scss文件转换为css文件

* 通过sass来编写，最后引入的还是css文件

* 书写格式 => 嵌套

  ```html
  //html文件
  
  <div class="box">
      box
      <div class="content1">
          content1
          <div class="content2">content2</div>
      </div>
  </div>
  ```

  ```css
  //sass文件
  
  .box{
      width: 100px;
      height: 100px;
      background-color: bisque;
      color: green($color: #000000);
  
      .content1{
          margin: 10px;
          width: 80px;
          height: 80px;
          color: pink;
  
          .content2{
              margin: 10px;
              width: 60px;
              height: 60px;
              color: blue($color: #000000);
              //伪元素要加&
              &:hover{
                  color:purple;
              }
          }
      }
  }
  ```

  ```css
  //css文件
  
  .box {
    width: 100px;
    height: 100px;
    background-color: bisque;
    color: 0;
  }
  .box .content1 {
    margin: 10px;
    width: 80px;
    height: 80px;
    color: pink;
  }
  .box .content1 .content2 {
    margin: 10px;
    width: 60px;
    height: 60px;
    color: 0;
  }/*# sourceMappingURL=index.css.map */
  ```

* sass注释
  * //在css文件里面看不到
  * /**/在css文件里面可以看到内容
  
* 变量定义
  * 定义$：$text-color:red;
  * 使用$text-color
  * 位置：只能卸载文件的最顶部
  * 内置方法：
    * lighten(text-color,20%)/dark(text-color,20%)
    * css会转换成相应的颜色

* 嵌套 => 代码引入和拆分

  * 样式拆分

    ```scss
    font:{
        size:20px;
        family:abs($number: 0);
        weight:abs($number: 0);
    }
    ```

  * 变量引入
    * 新建一个variable.scss文件专门存储变量
    * @import "../variable.scss" ===> 变量引入

* 占位符 ==> 样式继承   %placeholder ==> @extend

  ```scss
  // 定义占位符
  %placeholder{
      border: 1px solid #000000;
  }
  
  .box{
      width: 100px;
      height: 100px;
      background-color: bisque;
      color: green($color: #000000);
      // 继承占位符
      @extend %placeholder;
  }
  ```

* mixin混合的使用

  * 用来封装重复代码

  * @mixin用来封装重复的代码，名字随便起
  
  * @include用来引入封装的重复代码，后面直接跟名字
  
    ```scss
    @mixin single-ellipsis{
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .box{
        width: 100px;
        @include single-ellipsis
    }
    ```
  
  * 函数的形式可以直接传参设置样式
  
    ```css
    //一开始就传值代表默认值
  @mixin single-ellipsis($width:200px,$height:200px)
    ```

  * @mixin(@include)和@extend用法相似
  
* 媒体查询搭配Mixin配合使用

  * 原始写法

    ```scss
    // 嵌套语法
    .header {
        width:1000px;
        @media screen and (max-width:1200px){
            width:500px;
        }
    }
    
    // 响应式代码
    // 外部
    @media screen and (max-width:1000px){
        .header{
            width:500px;
        }
        .footer{
            color:red;
        }
    }
    ```

  * 媒体查询搭配Mixin配合使用写法

    ```css
    //ipad随便起的名字
    //$height定义的变量
    @mixin ipad($height){
        @media screen and (max-width:1000px){
            //修改的内容，位置写在@content这里
            @content;
            height:$height;
        }
    }
    
    .header{
        //@include定义的内容会替换掉@content
        @include ipad(){
            width:500px;
            color:red;
        }
    }
    ```



