
//                    探索JS内置原型的原型继承：
// 既然bar是一个function，也能通过prototype属性来访问，构造函数的原型，
// 那么它既然能够访问Function构造函数的原型，那么是不是可以访问Function原型的方法啊，是不是这么回事？
// 既然能访问Function构造函数的原型的方法，那么是不是可以调用Function构造函数的原型的方法？
// 你调用Function构造函数的原型的方法之后给它传了一个obj对象，那么是不是Function构造函数的原型的方法就有了这个obj对象？
// OK,我们来测试一下是不是这么回事？代码如下：

// function bar (name, age = { age: 18 }) {

// }
// Function.prototype.fakeCall = function (context) {
//   console.log(this) // ƒ bar (name, age = { age: 18 }) { }
// }
// bar.fakeCall()

// 哎呀，我们发现我们调用Function原型上的方法是并没有在Function原型函数体内接收参数，
// 为什么打印的this不是window对象呢？我们来看下段代码：

// function sum (a) {
//   console.log(this)
// }
// var obj = {
//   name: '北京',
//   fn: function () {

//   }
// }
// sum(obj)
// 不难发现这次打印的this是window，但是为什么Function原型方法调用打印的不是window呢？

// 我们知道JS对象中Object、Function、Array、Error、String等，
// 它们是不是也是由以下：
// function Object(){} new Object() 、function Function(){} new Function()、
// function Array(){} new Array()等构造成的？其实系统自动给我们做了处理。
// 
// 在我们给它原型添加东西时不需要给它做new或者返回一个对象，我们不妨来测试一下是不是这么回事,代码如下：

function dog () { }
dog.prototype.color = function (obj) {
  console.log(this)
}

var animal = new dog()
animal.color() // dog {}
console.log(animal.constructor) // ƒ dog () {}
// 我们发现它的确是这么回事，的确是系统自动帮助我们给做了new操作,
// 我们可以看到 我们拿到的都是bar和dog函数对象，不同的只是我们这个dog是一个自己构造的对象而已。
// 如果还是不懂请仔细思考，这里不再做过多描述。
