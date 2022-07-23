# Dom事件初识

* onclick

  ```html
  <div class="box"></div>
  <script>
  	let obox = document.querySelector(".box");
      obox.onclick = function(){
          console.log(obox);
      }
  </script>
  ```

* onmouseenter

  ```html
  <div class="box"></div>
  <script>
  	let obox = document.querySelector(".box");
      obox.onmouseenter = function(){
          console.log(obox);
      }
  </script>
  ```

* onmouseleave

  ```html
  <div class="box"></div>
  <script>
  	let obox = document.querySelector(".box");
      obox.onmouseleave = function(){
          console.log(obox);
      }
  </script>
  ```

  