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

