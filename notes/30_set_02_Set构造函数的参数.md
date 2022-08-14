# Set构造函数的参数

* 数组

  ```js
  let s = new Set([1,2,3]);
  console.log(s);// {1, 2, 3}
  ```

* 字符串

  ```js
  let s = new Set("jsdjks");
  console.log(s);//{'j', 's', 'd', 'k'}
  ```

* arguments

  ```js
  function fn(){
      console.log(new Set(arguments));
  }
  fn(1,2,3);//{1, 2, 3}
  ```

* NodeList

  ```js
  let aP = document.querySelectorAll("p");
  console.log(new Set(aP));//{p, p, p}
  ```

* new Set()  相当于克隆

  ```js
  let aP = document.querySelectorAll("p");
  let newAp = new Set(aP);
  let newAp1 = new Set(newAp);
  console.log(newAp);//{p, p, p}
  console.log(newAp1)//{p, p, p}
  console.log(newAp1 === newAp);//false
  ```

  