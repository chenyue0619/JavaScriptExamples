# 使用JSON方法封装localStorage

```js
//js代码

export {set,get,remove,clear};

const set = (name,value) => {
    localStorage.setItem(name,JSON.stringify(value));
}

const get = (name) => {
    return localStorage.getItem(JSON.parse(name));
}

const remove = (name) => {
    localStorage.removeItem(JSON.parse(name));
}

const clear = () => {
    localStorage.clear();
}
```

```html
//html代码

<script type="module">
    import {set,get,remove,clear} from "./js/localStorage/js";
    set("username",{
        firstname:"xiaoming",
        lastname:"zhang"
    });
    console.log(1);
</script>
```

