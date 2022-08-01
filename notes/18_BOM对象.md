# setInterval()定时器

# clearInterval()清除定时器

* setInterval()定时器

  * 定义：setInterval()函数可以重复调用一个函数，在每次调用之间具有固定的时间间隔

  * 写法：setInterval(function(){},2000)

    * 这个函数自动被以固定的间隔时间调用
    * 第一个参数是函数，接收匿名函数或具名函数
    * 第二个参数是间隔时间(单位是毫秒)，1000毫秒 === 1秒
    * 可以接收超过两个参数，也就是内部函数的参数

  * 缺陷：容易造成定时器叠加

  * 举例

    * 匿名函数：每隔1000毫秒控制台输出一次111

    ```html
    <script>
        setInterval(function(){
            console.log(111)
        },1000)
    </script>
    ```

    * 具名函数：每隔1000毫秒num加1，并在控制台输出

    ```html
    <script>
        let num = 0;
        let fn = function(){
            num++;
            console.log(num);
        }
        setInterval(fn,1000);
    </script>
    ```

    * 接收内部函数实参：每隔1000毫秒控制台输出a+b的值

    ```html
    <script>
        setInterval(function(a,b){
            console.log(a+b);
        },1000,1,2);
    </script>
    ```

* clearInterval()清除定时器

  * 写法
    * 给定时器设置标识，将标识名当做参数传入clearInterval()函数内部

  * 举例

    * 设置标识嵌套在setInterval()里面

    ```html
    <script>
        let num = 0;
        let mark = setInterval(function(){
            num++;
            console.log(num);
            if(num === 6){
                clearInterval(mark);
            }
        },1000)
    </script>
    ```

    

  

  