// 节流 在一定的时间内会执行一次
function throttle (func, wait) {
  let lastTime = null
  // 为了避免每次调用lastTime都被清空，
  // 利用js的闭包返回一个function确保不生命全局变量也可以
  return function () {
    let now = new Date()
    // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
    if (now - lastTime - wait > 0) {
      func()
      lastTime = now
    }
  }
};

