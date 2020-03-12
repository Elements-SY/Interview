function input (value) {
  console.log(`${value}`)
}
const ipt = document.getElementById('input')
// 节流 在一定的时间内会执行一次
function throttle (func) {
  let timer = 1000
  let lastTime = null
  // 为了避免每次调用lastTime都被清空，
  // 利用js的闭包返回一个function确保不生命全局变量也可以
  return function (args) {
    let now = new Date()
    // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
    if (now - lastTime - timer > 0) {
      func(args)
      lastTime = now
    }
  }
};
const throttleInput = throttle(input)
ipt.addEventListener("keyup", function (e) {
  throttleInput(e.target.value)
})