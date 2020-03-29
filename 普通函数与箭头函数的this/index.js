// var a = 1;
// const obj = {
//   a: 2,
//   fn1: function () {
//     console.log(`fn1 ${this.a}`) // fn1 2
//   },
//   fn2 () {
//     console.log(`fn3 ${this.a}`) // fn2 2
//   },
//   fn3: () => {
//     console.log(`fn2 ${this.a}`) // fn3 1
//   }
// };
// // obj.fn1() // fn1 2
// // obj.fn2() // fn2 2
// // obj.fn3() // fn3 1

var num = 1;
function sum () {
  var num = 2;
  return {
    fn: () => {
      console.log(`fn ${num}`) // fn 2
    }
  };
}
var sumFn = sum();
sumFn.fn()

