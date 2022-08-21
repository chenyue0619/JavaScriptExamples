# cookie的封装(dmeo__138.html)

```js
//set

const set = (name,value,{maxAge,domain,path,secure} = {}) => {
    let cookieType = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if(maxAge){
        cookieType += `;maxAge=${maxAge}`;
    }
    if(domain){
        cookieType += `;domain=${domain}`;
    }
    if(path){
        cookieType += `;path=${path}`;

    }
    if(secure){
        cookieType += `;secure=${secure}`;

    }
    document.cookie = cookieType;
    return cookieType;
}


//get

const get = (name) => {
    name = `${encodeURIComponent(name)}`;
    let cookieText = document.cookie.split(";");
    for(let item of cookieText){
        let [cookieName,cookieValue] = item.split("=");
        if(cookieName === name){
            return encodeURIComponent(cookieValue);
        }
    }
    return;
}

//remove

// 根据name,domain,path三者相同才是同一个cookie
// 将maxAge = 0/负数，这个时候可以删除cookie
const remove = (name,{domain,cookie}) = {
    set(name,"",{
        domain,
        path,
        maxAge:-1
    })
}
```

