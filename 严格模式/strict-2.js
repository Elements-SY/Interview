x = 3.14;       // 不报错
myFunction();
function myFunction() {
   "use strict";
   try {
      y = 3.14;
   } catch (err) {
      console.log(err) // ReferenceError: y is not defined
   }
   console.log('作用于局部声明了严格模式中的this值为: ',this) // undefined
}
console.log('未作用于局部声明了严格模式中的this值为: ',this) // window对象
/*
 总结: 什么是严格模式？
 严格模式一旦对该作用域声明了严格模式，那么所有书写都必须要严谨。
*/