# 箭头函数的this指向

* 箭头函数没有自己的this指向

* 箭头函数中的this指向上上一层作用域

  ```html
  <script>
      const = calc = {
          add:function(){
              const adder = () => {
                  console.log(this);//this === cals
              }
              adder();
          }
      };
      cals.add();
  </script>
  ```

* 在非严格模式下，undefined ==> window