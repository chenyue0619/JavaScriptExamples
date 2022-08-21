# localStorage的注意事项

* localStorage的存储期限
  * localStorage是持久化的本地存储，除非手动清除（比如通过js删除，或者清除浏览器缓存）
  * 数据是永远不会过期的

* sessionStorage

  * 当会话结束（比如关闭浏览器）的时候，sessionStorage中的数据会被清空
  * 与localStorage一样的API
    * setItem()
    * getItem()
    * length
    * removeItem()
    * clear()

* localStorage键和值的类型

  * localStorage存储的键和值只能是字符串类型

  * 不是字符串类型，也会再转化字符串类型再存进去

    ```js
    localStorage.setItem({},19);
    console.log(localStorage);
    //Storage {[object Object]: '19', length: 1}
    ```

* 不同域名下能否共用localStorage
  * 不同域名是不能共用localStorage的
* localStorage的兼容性
  * IE7及以下版本不支持localStorage，IE8开始支持
  * can i uses查询兼容性

