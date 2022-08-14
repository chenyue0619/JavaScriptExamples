# Map实例的属性和方法

* 添加set()

  * 可以进行链式操作

    ```js
    let m = new Map();
    m.set("name","xiaoming");
    m.set("sex","nan");
    console.log(m);//Map(2) {'name' => 'xiaoming', 'sex' => 'nan'}
    ```

* 获取键值get()

  ```js
  let name = m.get("name");
  console.log(name);//xiaoming
  ```

* 判断是否含有某个属性has()

  ```js
  console.log(m.has("name"));//true
  console.log(m.has("sleep"));//false
  ```

* 删除delete()

  * 放属性名

  * 若没有也不会报错

    ```js
    m.delete("name");
    m.delete("sleep");
    ```

* 遍历forEach()

  * 接收两个参数：函数，this指向

    ```js
    m.forEach((key,value,map) => {
        console.log(key,value,map === m);
    },document)
    ```

    ![1660494390201](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1660494390201.png)

* 长度size

  ```js
  console.log(m.size);//2
  ```

  