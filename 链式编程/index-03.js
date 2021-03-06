// Promise链式编程
function Easypromise (fn1) {
  var that = this;
  this.value = undefined;
  this.then = (resolve) => {
    // // 非链式编程
    // resolve(this.value)
    // 链式编程
    return new Easypromise(function (fn2) {
      console.log(fn2)
      that.value = resolve(that.value);
      fn2(that.value)
    })
  }
  fn1(res => {
    this.value = res
    console.log('A')
  });
}
var easyPromise = new Easypromise((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res);
  return res + 1;
})

// 我们发现打开下面代码报错只打印了1，并且报22行Cannot read property 'then' of undefined
// OK 那么我们接着看index-04.js是如何实现链式编程的。
// 链式编程
// easyPromise.then(res => {
//   console.log(res);
//   return res + 1;
// }).then(res => {
//   console.log(res);
// })