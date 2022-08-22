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