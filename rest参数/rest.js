function rest (a, b, ...args) {
  // console.log(a, b) // 上海 北京
  // console.log(args) // ["闵行", "崇文"]
  // console.log(args.length) // 2
  args.map((val, index, item) => {
    console.log(val, index, item)
    // 闵行 0 ["闵行", "崇文"]
    // 崇文 1 ["闵行", "崇文"]
  })
  console.log(args.__proto__)
  console.log(args.__proto__.constructor) // ƒ Array() { [native code] }
  // 总结： ES6 rest 参数是一个实例数组对象，拥有数组的方法
}
rest('上海', '北京', '闵行', '崇文')

function totals (...args) {
  console.log(args) // ["张三", "李四", "王五", "马六"]
}
totals('张三', '李四', '王五', '马六')

// function rst (...args, fruit) {
//   console.log(args) // ["张三", "李四", "王五", "马六"]
//   console.log(fruit) // Rest parameter must be last formal parameter
//   // 总结： ES6 rest 参数后面不能再添加参数，前面是可以添加的
//   // 三个点“...”表示扩展运算符
// }
// rst('苹果', '桃子')