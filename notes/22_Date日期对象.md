# Date日期对象

* 获得此时此刻日期：

  * 使用new Date()即可得到当前事件的日期对象，它是object类型值

  ```html
  let date = new Date();
  console.log(date);//目前时间
  	//Fri Aug 05 2022 23:19:12 GMT+0800 (中国标准时间)
  console.log(typeof date);//object
  ```

* 单参数（字符串）方法设置

  ```
  let d1 = new Date("2022-10-20 12:22:34");
  	//Thu Oct 20 2022 12:22:34 GMT+0800 (中国标准时间)
  ```

* 单参数（数字）方法设置

  * 设置-格林威治事件1970年01月01日00时00分00秒的时间戳（即0） + 参数（毫秒数） = 所设置的时间

  ```
  let d3 = new Date(30000);
  	//Thu Jan 01 1970 08:00:30 GMT+0800 (中国标准时间)
  ```

* 多参数（数字）方法设置

  ```
  let d2 = new Date(2022,10,28,12);
  	//Mon Nov 28 2022 12:00:00 GMT+0800 (中国标准时间)
  ```

* 日期对象常用方法

  * getDate()        得到日期1~31
  * getDay()          得到星期0~6
  * getMonth()     得到月份0~11
  * getFullYear()   得到年份
  * getHours()      得到小时数0~23
  * getMinutes()   得到分钟数0~59
  * getSeconds()   得到秒数0~59

* 时间戳

  * 表示1970年1月1日零点整距离某时刻的毫秒数

  * 通过getTime()方法或者Date.parse()函数可以将日期对象变为时间戳

    * getTime()精确到毫秒，即最后一位

    ```html
    let d4 = new Date();
    console.log(d4.getTime());//1659713993871
    ```

    * Date.parse()精确到秒，即最后三位是000

    ```html
    let d4 = new Date();
    console.log(Date.parse(d4));//1659713993000
    ```

    * 可以结合new Date()传入单参数获得时间戳对应的时间

    ```html
    console.log(new Date(1659713993000));
    	//Fri Aug 05 2022 23:39:53 GMT+0800 (中国标准时间)
    ```

* 两个时间对象或者日期对象可以和数字做减法

  * 减去0相当于调用getTime() => 获得相应的格林威治时间戳

  ```html
  let d5 = new Date();
  console.log(d5 - 0);//1659714332264
  ```

  * 两个时间对象相减获得两个时间段的毫秒差

  ```html
  let d5 = new Date();
  console.log(d5 - 0);
  setTimeout(function(){
      let d6 = new Date();
      let diff = d6 - d5;
      console.log(diff);//2794
  },2000)
  ```

  