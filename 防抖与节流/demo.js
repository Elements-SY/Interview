function input (value) {
  console.log(`输入的内容${value}`)
}
const ipt = document.getElementById('input')

function debounce (fun, delay) {
  let timer;
  return function (args) {
    const that = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fun.call(that, args)
    }, delay)
  }
}
const debounceInput = debounce(input, 500)
ipt.addEventListener("keyup", function (e) {
  debounceInput(e.target.value)
})

// 假设触发某一个事件，在该事件中设置一个定时器，

// 到定时器一定的时间再去做处理，如果定时器还没有

// 到达所定的时间，那么又触发该事件，这时就清除定时器再重新开一个定时器

// 然后再使用定时器到达所定的时间去做处理。