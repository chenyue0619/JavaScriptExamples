# HTTP方法

* 传统的methods
  * get获取服务器的数据
  * post向服务器提交数据
  * 简单的网页功能，就这两个操作
* 现在的methods
  * get获取数据
  * post新建数据
  * patch/put更新数据
  * delete删除数据
* RESTful  API
  * 一种新的API设计方法（早已推广使用）
  * 传统的API设计：把每个url当做一个功能
  * Restful API：把每个url当做一个唯一的资源的标识
  * 不适用url参数
    * 传统的API设计：/api/list?pageIndex=2
    * Restful API设计./api/list/2
  * 用methods表示操作类型(传统API设计)
    * post请求  /api/create-blog
    * post请求  /api/update-blog?id=100
    * get请求  /api/get-blog?id=100
  * 用methods表示操作类型(Restful API设计)
    * post请求  /api/blog
    * patch请求  /api/blog/100
    * get请求  /qpi/blog/100