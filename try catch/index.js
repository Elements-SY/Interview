// 在了解try/catch/finally之前我们先阅读一下块级注释的文案。
/*
  try/catch/finally 语句用于处理代码中可能出现的错误信息。
  错误可能是语法错误，通常是程序员造成的编码错误或错别字。
  也可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
  try语句允许我们定义在执行时进行错误测试的代码块。
  catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
  finally 语句在 try 和 catch 之后无论有无异常都会执行。
  注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个。
  提示： 当错误发生时， JavaScript 会停止执行，并生成一个错误信息。
  使用 throw 语句 来创建自定义消息(抛出异常)。如果你将 throw 和 try 、 catch一起使用，
  就可以控制程序输出的错误信息。
*/
// // 下面我们来故意把前一段代码语法写错后一段按标准的来写看看，是否还会在执行错误之后接着往下执行，代码如下:

// // var a = b; // Uncaught ReferenceError: b is not defined
// // console.log('err')
// // 我们发现在var a = b报错之后不再继续往下执行了，这与JS处理机制是单线程有关，本文不做解释。
// // OK那么我们来看看使用try catch做异常捕获处理试试,代码如下:

// try {
//   var a = b;
// }
// catch (err) {
//   console.log(err.message)
// }

// // 从上面我们发现没问题，try的错误信息，然后交给catch捕获处理，最终再作为一个对象返回给我们。
// // 那么我们来探究一下try 和 catch代码如下:

// try {
//   var a = b;
// }
// catch (err) {
//   // console.log('异常处理')
//   // console.log(err) // ReferenceError: b is not defined
//   // console.log(err.message) // b is not defined
//   // // 官方说通过异常捕获的返回参数通过该参数访问message属性用于设置或返回错误信息。
//   // // 既然可以通过属性访问，由此可见是一个对象。我们来通过typeof 检测一下异常捕获的返回参数是不是一个对象。
//   // console.log(typeof err) // object
//   // // 从上述看还真是一个对象，既然是对象，我们来遍历该对象有哪些属性。
//   // Object.keys(err).map(key => {
//   //   console.log(key)
//   // })
//   // 呦呵，既然没有打印出任何东西,我们再看看Object.keys()遍历之后返回的值
//   // console.log(Object.keys(err)) // []
//   // 既然是一个空数组？我们使用ES5遍历对象试试看。
//   // for (var k in err) {
//   //   console.log(k)
//   //   console.log(err[k])
//   // }
//   // 我去，既然也是什么都没有打印,OK我们再看看它有没有原型
//   // console.log(err.__proto__) // Error {name: "ReferenceError", message: "", constructor: ƒ ReferenceError(), toString: ƒ}
//   // 我们发现它有原型，它的原型是一个Error构造函数,并且实例属性和实例方法都有，
//   // 但实际上我们并没有写这么一个构造函数，这就说明这时JS内置方法,我们去官方了解一下，
//   // 链接地址: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error
//   // 于是我们发现我们也可以直接通过Error构造函数直接自定义错误信息,代码如下。
// }

const error = new Error('北京');
// console.log(error) // Error: 北京
console.log(error.message) // 北京

