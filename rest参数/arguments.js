// 在说ES6 Rest参数之前我们先看一下ES5的arguments对象

function sum (a, b) {
  var arg = arguments;
  console.log(arg) // ["上海", "北京"]
}
sum('上海', '北京')

function fn () {
  var arg = arguments;
  console.log(arg) // ["闵行", "崇文"]
}
fn('闵行', '崇文')

function total () {
  var arg = arguments;
  // console.log(arg.length) // 2
  // console.log(arg[1]) // 青岛
  // console.log(arg.split('')) // arg.split is not a function
  // arg.map(function (val, index, item) {
  //   console.log(val, index, item) // arg.map is not a function
  // })
  // console.log(typeof arg) // object
  console.log(arg.__proto__)
  console.log([].__proto__.constructor) // ƒ Array() { [native code] }
  // console.log(arg.__proto__.constructor) // ƒ Object() { [native code] }

}
total('天津', '青岛')