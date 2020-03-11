// 防抖 在连续事件完全触发完成之后等待时间过去之后才会执行，
// 也就是说必须等待到达所定的时间才会执行仅仅只会调用一次
function debounce (fn) {
  var time = 1000;
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    console.log(timeout);
    timeout = setTimeout(fn, time);
  }
}
// 处理函数
function handler () {
  console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handler));