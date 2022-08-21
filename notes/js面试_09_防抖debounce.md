# 防抖debounce(demo__139.html)

* 定义
  
  * 指触发事后在n秒内函数只执行一次，若在n秒内再次触发则重新计算用输入的结束或暂停时，才会触发change事件
  
* 例子

  * 监听一个输入框，文字变化后触发change事件
  * 直接用keyup事件，则会频繁触发change事件

  ```html
  <input type="text" name="" id="text">
  <script>
      let text = document.querySelector("#text");
      let timer;
      text.addEventListener("keyup",function(){
          let content = text.value;
          // 先清除timer，不让函数内容执行，
          if(timer){
              clearTimeout(timer);
          }
          // 2秒之后执行函数，打印出文本框中的所有值
          timer = setTimeout(function(){
              console.log(content);
          },2000)
      });s
  </script>
  ```

* 封装debounce防抖

  ```js
  // 封装debouonce防抖(一定时间内只执行一次)
  const debounce = function(fn,delay){
  
      // 定义一个延时器
      let timer;
      // 返回函数执行，逻辑主代码(){
      // 先清除延时器，不让延时器里面的内容执行
      if(timer){
          clearTimeout(timer);
      }
      // 执行延时器
      timer = setTimeout(() => {
          // 逻辑主代码
          fn()
      },delay)
  }
  }
  ```

  