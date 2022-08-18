# cookie的基本用法

* 写入Cookie

  * 必须一个一个数据写入，不可以一起写入
  * 只能全部打印出cookie内容，不可以单独打印出
  * 格式：名=值；不可以写冒号

  ```js
  document.cookie = "username=xiaoming";
  document.cookie = "age=19";
  console.log(document.cookie);//username=xiaoming; age=19
  ```

* 读取cookie
  * 读取的是一个由名值对构成的字符串，每个名值对之间由(分号+一个空格)隔开
  * username=xiaoming; age=19