// 设置默认参数对象
const DEFAULTS = {

    // 1、发送请求的方式
    methods:"GOT",

    ///2、请求报文里面的数据

    // 请求头携带的数据
    params:null,
    // username=xiaoming&sdex=female请求头以这样形式携带数据

    // 请求体里面的数据
    data:null,
    // 请求体以这样形式携带数据
    // data:{
    //     username:xiaoming,
    //     sex:female
    // }
    // data:formData数据


    ///3、属性

    // 请求类型：数据发送请求时的格式formData
    content_type:"application/x-www-form-urlencoded",
    // 响应类型
    responseType:"",
    // 是否携带cookie数据,跨域不携带，默认为false,同域会携带true
    withCredentials:false,
    // 请求超时时间
    // timeout:0,

    ///4、方法
    
    // 请求成功
    success(){},
    // 请求失败，即HTTP状态码异常
    httpCodeError(){},
    // 程序中的错误
    error(){},
    // 终止请求
    abort(){},
    // 请求超时
    timeout(){}

    // 
}

export default DEFAULTS;