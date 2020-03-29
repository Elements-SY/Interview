// 函数构造器与原型和原型链之间的关系与区别
// 测试一: 调用方法时直接通过点来找到函数的属性
var attrInfo = ['constructor', 'prototype', '__proto__'];
function sum () { }

for (let v of attrInfo) {
  try {
    sum()[v]
  }
  catch (error) {
    console.error(error.message)
    // Cannot read property 'constructor' of undefined
    // Cannot read property 'prototype' of undefined
    // Cannot read property '__proto__' of undefined
  }
}
// 问题如下：
// 我们发现在调用方法时直接通过点来找到sum函数的属性时发现该属性未定义？这是怎么回事？
// 总结如下：
// 因为函数在调用的时候并没有返回值，当调用之后就释放内存了，如果函数没有给返回值，那么默认会是undefined。
// 也就是你遍历捕获的都是undefined是否有attrInfo数组里的属性。我们不妨来测试一下undefined，代码如下:


// // 测试二: 检测undefined有否存在attrInfo数组里的属性，以及什么类型
// for (let v of attrInfo) {
//   try {
//     undefined[v]
//   }
//   catch (error) {
//     console.error(error.message)
//     // Cannot read property 'constructor' of undefined
//     // Cannot read property 'prototype' of undefined
//     // Cannot read property '__proto__' of undefined
//     console.log(typeof undefined) // undefined
//   }
// }
// // 总结如下：
// // 我们发现果然没有,并且undefined类型还是undefined。


// // 测试三: 通过函数的引用地址来点找到函数的属性
// for (let v of attrInfo) {
//   console.log(sum[v])
//   // ƒ Function() { [native code] }
//   // {constructor: ƒ}
//   // ƒ () { [native code] }
// }

// 总结如下：
// 我们发现函数的引用地址可以通过点来找到attrInfo数组里的属性，
// 函数的引用地址究竟是什么类型，是一个字符串还是什么我们检测看一下，代码如下:

// 测试三: typeof检测函数的引用地址属于什么类型
// console.log(typeof sum) // function
// 总结如下：
// 我们发现函数的引用地址属于function类型不是一个字符串。
// 你或许以为如果函数的引用地址是一个字符串那么它就不能通过点语法来找属性是吧,
// 其实不管什么都可以通过点语法来找属性，一个字符串或者一个数字它也有自己的类型，
// 我们来测试一下代码如下：

// // 测试四: typeof检测字符串和数字以及对象字面量属于什么类型
// console.log(typeof '') // string
// console.log(typeof 1) // number
// console.log(typeof {}) // object
// // 总结如下：
// // 我们发现它们确实有自己的类型

// // 测试五: 检测字符串和数字以及对象字面量是否存在attrInfo数组里的属性
// for (let v of attrInfo) {
//   console.log(''[v])
//   console.log(1[v])
//   console.log({}[v])
// }
// // 总结如下：
// // 我们发现除了不能通过prototype属性来找，字符串和数字以及对象字面量都有自己的构造器和原型链

// 回顾总结，我们发现除了function的引用地址也是一个类型是一个function类型，
// 并且只有function类型有prototype属性，其它的只有构造器和原型链。
// 既然如此我们来看看这些对象的构造器和原型以及原型链它们之间的关系与却别：

// var obj = {
//   name: '张三',
//   fn: function () { }
// }

// console.log(obj.constructor) // ƒ Object() { [native code] }
// // 上述这个是嘛意思？我们来分析一下，这个是不是一个Object构造函数？
// // 就是说你这个字面量对象的构造器是由Object构造函数构成的。


// console.log(obj.__proto__) // 是一个字面量对象
// // 那么上述这个字面量对象是嘛玩意呢？
// // 这个字面量对象包含构造字面量对象的构造器，也就是说正是有这个构造器中的构造函数才构成了该字面量对象；
// // 其中还包括该字面量对象的Object构造函数的方法，既然该字面量对象是由这个构造器构成的，那么该字面量对象
// // 必然有权访问构造函数的方法,因为它们是继承关系。
// // 如果不懂请看原型与“原型链以及构造器”文件夹里的demo，这里不再赘述。

// 使用构造函数可以通过prototype属性来访问，实例化对象则不能，它必须通过__proto__原型链属性来访问。



