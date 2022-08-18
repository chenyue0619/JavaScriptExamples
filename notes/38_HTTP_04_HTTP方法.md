# HTTP方法

* 定义：

  * 浏览器发送请求时采用的方法，和响应无关
  * GET  POST  PUT  DELETE
  * 用来定义对于资源采用什么样的操作，有各自的语义

* HTTP方法(增删改查)

  * GET  获取数据  ===>  获取资源（文件）
  * POST  创建数据 ==>  注册信息
  * PUT  更新数据  == > 修改个人信息，修改密码
  * DELETE  删除数据 ==>  删除一条评论

* RESTful  接口设计

  * 一种接口设计风格，充分利用HTTP方法的语义

  * 通过用户ID获取个人信息，使用GET方法

    ```js
    https://www.baidu.com/api/http/getUser?id=1
    ```

  * 注册新用户，使用POST方法

    ```js
    https://www.baidu.com/api/http/addUser
    ```

  * 修改一个用户，使用PUT方法

    ```js
    https://www.baidu.com/api/http/modifyUser
    ```

  * 删除一个用户，使用POST方法

    ```js
    https://www.baidu.com/api/http/deleteUser
    ```

  * 使用RESTful接口设计

    ```js
    //根据（增删改查）语义化方法来设计接口
    https://www.baidu.com/user
    ```

    