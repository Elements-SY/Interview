// var a;
// let a = 3;
// console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared

// let b;
// var b = 3;
// console.log(b); // Uncaught SyntaxError: Identifier 'b' has already been declared

// var c;
// {
//   let c = 3;
//   console.log(c); // 3
// };
// console.log(c); // undefined

// let d;
// {
//   var d = 3;
//   console.log(d); // Uncaught SyntaxError: Identifier 'd' has already been declared
//   // let变量不能重复声明,如果重复了则在var d = 3;这行报错，不再往下执行代码。其原因因为js是同步机制,
//   // 除了setTimeout和promise以及Ajax除外;
//   // let不允许在相同作用域内，重复声明同一个变量。
// };
// console.log(d); // undefined

// 从上述可以看出 变量a、b都报错，但是变量c没有报错变量d却报错了，为什么，不是说let变量不能重复声明吗?
// 但是变量c却没有报错?
// 我们来看看下面变量i这段代码
{
  var i = 3;
}
console.log(i); // 3
// 为什么变量i等于3 ?上述是一个对象确实没问题，但普通变量并没有块级作用域这一说，只有function函数作用域，
// 只有let才有块级作用域。
// 变量c之所以没有报错，其原因与var c变量不在同一个作用域

for (let num = 0; num < 10; num++) {
  console.log(num);
  // var num = '背景'
  // console.log(i)
}
console.log(i)

