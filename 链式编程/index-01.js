// 链式编程探索
function Chainfn () {
  this.prop1 = null;
  this.prop2 = null;
  this.prop3 = null;
  this.method1 = function (p1) {
    this.prop1 = p1;
    console.log(this.prop1)
    return this;
  },
    this.method2 = function (p2) {
      this.prop2 = p2;
      console.log(this.prop2)
      return this;
    },
    this.method3 = function (p3) {
      this.prop3 = p3;
      console.log(this.prop3)
      return this;
    }
}
// // 或者添加到原型上
// Chainfn.prototype = {
//   method1: function (p1) {
//     this.prop1 = p1;
//     return this;
//   },
//   method2: function (p2) {
//     this.prop2 = p2;
//     return this;
//   },
//   method3: function (p3) {
//     this.prop3 = p3;
//     return this;
//   }
// }
var chainfn = new Chainfn();
chainfn.method1(1).method2(2).method3(3); // 1 2 3  

// 我们发现这样是可以实现链式调用，但是我们要实现的不是这样的，
// 而是像如下代码Promise链式编程一样的。

// // Promise链式编程
// new Promise((resolve, reject) => {
//   resolve(1)
// }).then(res => {
//   console.log(res);
//   return res + 1;
// }).then(res => {
//   console.log(res);
//   return res + 1;
// }).then(res => {
//   console.log(res);
// })
