# Map的注意事项

* NaN === NaN

* {} !== {}

  ```js
  let m = new Map();
  m.set(NaN,1).set(NaN,2).set({},1).set({},2);
  console.log(m);//Map(3) {NaN => 2, {…} => 1, {…} => 2}
  ```

* 对象键值对于Map键值对的用处
  * 只有模拟显示实际的实体时，才使用对象
  * 如果只是需要ket -> value的结构时，或执行额需要字符串以外的值左键，使用Map更合适