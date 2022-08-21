# 节流throttle(demo__140.html)

* 定义：

  * 连续发生的事件在n秒内只执行一次函数

* 例子

  * 拖拽一个元素时，要随时拿到该元素被拖拽的位置
  * 直接用drag事件，则会频繁触发，很容易导致卡顿
  * 节流：无论拖拽速度多快，都会每隔100ms触发一次

  ```html
  <div class="box" draggable="true"></div>
  <script>
      let box = document.querySelector(".box");
      let timer;
      box.addEventListener("drag",function(e){
          if(timer){
              return;
          }
          timer = setTimeout(function(){
              console.log(e.offsetX,e.offsetY);
              timer = null;
          },1000)
      })
  </script>
  ```

* 封装throttle

  ```js
  const throttle = function(fn,delay){
      let timer;
      return function(...args){
          if(timer){
              return;
          };
          timer = setTimeout(() => {
              fn(...args);
              timer = null;
          },delay)
      }
  }
  ```

  