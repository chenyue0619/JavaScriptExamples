# Map构造函数的参数

* 只能传入二维数组，并且能够体现出键值对

  ```js
  let arr = [
      ["name","xiaoming"],
      ["sex","nan"],
      ["age",19]
  ]
  let m = new Map(arr);
  console.log(m);//{'name' => 'xiaoming', 'sex' => 'nan', 'age' => 19}
  ```

* 传入Map，相当于克隆

  ```js
  let n = new Map(m);
  console.log(n);//Map(3) {'name' => 'xiaoming', 'sex' => 'nan', 'age' => 19}
  console.log(n === m);//false
  ```

  