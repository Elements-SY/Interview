// Promise链式编程
function Easypromise (fn1) {
  this.value = undefined;
  fn1(res => {
    this.value = res
  });
  Easypromise.prototype.then = (resolve) => {
    // 非链式编程
    resolve(this.value)
  }
}
var easyPromise = new Easypromise((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res);
  return res + 1;
})

// // 我们发现打开下面代码报错只打印了1，并且报22行Cannot read property 'then' of undefined
// // OK 那么我们接着看index-04.js是如何实现链式编程的。
// // 链式编程
// easyPromise.then(res => {
//   console.log(res);
//   return res + 1;
// }).then(res => {
//   console.log(res);
// })