# 回调地狱callback hell

​		回调函数是被当做参数传递给其它函数的函数，回调函数可以在被调用的函数内执行一些任务。

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 200px;
        height: 200px;
        background-color: blueviolet;
        transition: all .3s;
    }
</style>
</head>
<body>
    <div class="box"></div>
    <script>
        let oBox = document.querySelector(".box");
        // 这里有三个参数
        //  el表示传入的元素
        //  {x = 0,y = 0} = {}表示对传入的对象解构赋值
        //  end表示传入的函数，这里就是回调函数
        const move = (el,{x = 0,y = 0} = {},end = () => {}) => {
            el.style.transform = `translate3d(${x}px,${y}px,0)`;
            // ontransitionend在transition结束之后才会执行的操作
            el.ontransitionend = function(){
                end();
            };
        };

        // 回调函数是被当做参数传递给其他函数的函数
        document.onclick = function(){
            move(oBox,{x:200,y:0},() => {
                move(oBox,{x:200,y:200},() => {
                    move(oBox,{x:0,y:200},() => {
                        move(oBox,{x:0,y:0})
                    })
                })
            })
        }
        // 这里是将函数本身作为参数传递给函数，并不是回调函数的语法
        document.onclick = function(){
            move(oBox,{x:200,y:0},
            move(oBox,{x:200,y:200},
            move(oBox,{x:0,y:200},
            move(oBox,{x:0,y:0}))))
        }
    </script>
</body>
```

