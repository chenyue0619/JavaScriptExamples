# for of循环

* iterator封装for of

  ```js
  let arr = [1,2,3];
  let it = arr[Symbol.iterator]();
  let next = it.next();
  while(next.done === false){
      console.log(next.value);
      next = it.next();
  }
  ```

* 与continue/break一起使用

  ```js
  let arr = [1,2,3,4,5];
  for(let i of arr){
      if(i === 2){
          continue;
      }
      if(i === 4){
          break;
      }
      console.log(i);//1  3
  }
  ```

* 遍历数组

  * arr.keys()

    ```js
    let arr = [1,2,3,4];
    for(let index of arr.keys()){
        console.log(index);
    }
    ```

  * arr.values()

    ```js
    for(let value of arr.values()){
        console.log(value);
    }
    ```

  * arr.entries()

    ```js
    for(let [index,value] of arr.entries()){
        console.log(index,value);
    }
    ```

* 遍历对象

  * Object.keys(obj)，构造函数Object上面的方法

    ```js
    let obj = {
        name:"xiaoming",
        sex:"nan"
    }
    for(let key of Object.keys(obj)){
        console.log(key);
    }
    ```

  * Object.values(obj)

    ```js
    for(let value of Object.values(obj)){
        console.log(value);
    }
    ```

  * Object.entries(obj)

    ```js
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value);
    }
    ```

    

