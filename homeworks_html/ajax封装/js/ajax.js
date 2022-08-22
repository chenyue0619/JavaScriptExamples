// 创建一个构造函数，里面封装前后台通信需要用到的数据以及方法属性

import DEFAULTS from "./defaults.js";

class Ajax{
    // url接受请求的地址
    // options是一个对象，封装着ajax对象的一些属性和方法
    constructor(url,options){
        // 将url属性绑定在Ajax对象上面
        this.url = url;
        this.options = Object.assign({},DEFAULSTS,options);
        // 初始化对象，当new一个对象时，就会调用此方法，初始化相应的方法
        this.init();
    }

    // 初始化方法，定义在原型上面
    init(){
        // 创建一个前后端通信的xhr对象
        const xhr = new XMLHttpRequest();
        // 将xhr绑定在this上面，这样的话所有的方法都可以访问到xhr，要不然只能在init()这个方法里面才能访问到
        this.xhr = xhr;
        // // 监听响应结果
        // xhr.addEventListener("readystatechange",() => {
        //     if
        // })

        // 专门写一个方法，用来绑定响应的程序，上述onreadystatechange只监听响应的结果
        this.bindEvent();
    }

    // 将响应的程序方法绑定在原型上面
    bindEvent(){
        // 将xhr对象单独拿出来使用，以免后续老是写this.xhr很麻烦
        const xhr = this.xhr;

        // 将options(DEFAULTS)解构赋值，拿到里面的方法
        const {success,httpCodeError,error,abort,timeout} = this.options;

        // 监听响应结果
        xhr.addEventListener("readystatechange",() => {
            if(xhr.readyState !== 4) return;
            // isOk()是绑定在原型上面的，所以要用this.isOk()才能调用
            if(this.isOk()){
                // 如果responseType没有专门设置相应的结构，那就用responseText,否则response都是一样的结果，所以在这里用response会覆盖全面一点
                success(xhr.response,xhr)
            }else{
                // 响应失败执行的操作，接收状态码，失败类型
                httpCodeError(xhr.status,xhr);
            }
        })

        // 失败
        xhr.addEventListener("error",() => {
            error(xhr);
        })

        // 终止
        xhr.addEventListener("abort",() => {
            abort(xhr);
        })

        // 超时
        xhr.addEventListener("timeout",() => {
            timeout(xhr);
        })

    }
    // 检测状态码是否正常,isOk()是绑定在原型上面的
    isOk(){
        const xhr = this.xhr;
        return xhr.status >= 200 && xhr.status < 300 || xhr.status === 304
    }
}

export default Ajax;
// 创建一个Ajax对象
new Ajax();