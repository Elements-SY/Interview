// 该代码的详解在demo.js文件中
function Aiesec (fn) {
  this.value = undefined;
  this.then = (resolve) => {
    return new Aiesec(fn2 => {
      this.value = resolve(this.value)
      fn2(this.value)
    })
  },
    fn(res => {
      this.value = res
    })
}
var aiesec = new Aiesec((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res)
  return res + 1;
}).then(res => {
  console.log(res)
})