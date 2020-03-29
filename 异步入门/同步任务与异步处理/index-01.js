function Aiesec (fn) {
  this.value = undefined;
  this.then = (resolve) => {
    this.value = resolve(this.value)
    return this;
  },
    // fn(function (res) { // 关于这个问题请看“什么是this04.txt”
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

