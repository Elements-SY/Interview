class Easypromise {
  constructor(fn1) {
    this.value = undefined;
    fn1(res => {
      this.value = res
    })
  }
  then (resolve) {
    // // 非链式编程
    // resolve(this.value)

    // 链式编程
    return new Easypromise((fn2) => {
      this.value = resolve(this.value);
      fn2(this.value)
    })
  }
}
var easyPromise = new Easypromise((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res);
  return res + 1;
})

easyPromise.then(res => {
  console.log(res);
  return res + 1;
}).then(res => {
  console.log(res);
})