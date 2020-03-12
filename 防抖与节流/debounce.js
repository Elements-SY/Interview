// 防抖 在连续事件完全触发完成之后等待时间过去之后才会执行，
// 也就是说必须等待到达所定的时间才会执行仅仅只会调用一次
var el = document.getElementById('input')
// 防抖事件
function debounce (fn) {
  var timer = null;
  return function (args) { // args防抖函数的回调函数的传参
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn(args)
    }, 1500);
  }
}
// 防抖函数的回调函数
function input (value) {
  console.log(`${value}`)
}
var debounceInput = debounce(input)
el.addEventListener("keyup", function (e) {
  debounceInput(e.target.value)
})
