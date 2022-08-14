# Map的应用

```js
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    let aP = document.querySelectorAll("p");
    [p1,p2,p3] = aP;
    let arr = [
        [p1,"orange"],
        [p2,"pink"],
        [p3,"blue"]
    ]
    let m = new Map(arr);
    m.forEach((value,key) => {
        key.style.color = value;
    })
    </script>
```

