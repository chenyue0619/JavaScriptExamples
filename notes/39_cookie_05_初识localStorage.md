# 初识localStorage

* 定义：

  * localStorage也是一种浏览器存储数据的方式（本地存储）
  * 它只能存储在本地，不会发送到服务器
  * 直接在浏览器端打开网页就可以在application看到数据，因为，数据存储在本地，不会上传到服务器，所以不需要在服务器打开

* 大小限制：

  * 单个域名下的localStorage总大小有限制，5MB

* API

  * setItem()添加

    ```js
    localStorage.setItem("name","xiaoming");
    localStorage.setItem("age",19);
    //name: 'xiaoming', age: '19', length: 3
    ```

  * length长度

    ```js
    console.log(localStorage.length);//3
    
    ```

  * getItem()获取

    * 获取不存在的属性返回null

    ```js
    console.log(localStorage.getItem("name"));//xiaoming
    console.log(localStorage.getItem("sex"));//null
    
    ```

  * removeItem()移除

    ```js
    localStorage.removeItem("name");
    console.log(localStorage);//age: '19', length: 2}
    ```

  * clear()全部移除

    ```js
    localStorage.clear();     console.log(localStorage);//Storage {length: 0}
    ```

    

  