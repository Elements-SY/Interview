/*
 什么是严格模式：严格模式一旦对该作用域声明了严格模式，那么所有书写都必须要严谨
 为什么使用严格模式 ?
*/
myFunction();
function myFunction() {
   y = 3.14;   
   console.log(y) // 3.14
   console.log('未声明严格模式下的this值为: ',this) // window对象
}