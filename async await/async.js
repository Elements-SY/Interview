// let num = 1;
// async console.log(num);
// // Uncaught SyntaxError: Unexpected identifier

// async let num = 1;
// console.log(num);
/*
Uncaught SyntaxError: Unexpected identifier
未捕获到   语法错误       期望的     标识符

上述所说的标识符 也就是 说的async关键字

*/

// function test () {
//     console.log(1)
// }
// async test() // Uncaught SyntaxError: Unexpected identifier

// OK,我们来分析前面所报错的，都提示Uncaught SyntaxError: Unexpected identifier
// 当我们百度一下 es async 发现 async必须要使用在一个function 函数前面，
// 那我们来试试await，代码如下：

// await console.log(2); // Uncaught SyntaxError: await is only valid in async function
// Uncaught SyntaxError: await is only valid in async function
// 未捕获到   语法错误   : await 只有在async function 生效

// async function test () {
//     console.log(1)
// }
// await test() // 发现还是报上述错误，我们又百度查了一下，原来await必须要配合async function里面，

// async function test () {
//     await console.log(1)
// }
// test()
// console.log(2)
// 执行顺序：1、2

// var num = 0
// async function test () {
//     num++;
//     await console.log(num)
// }
// test()
// console.log(2)
// 执行顺序：1、2

// 我们发现await不是异步吗？为什么还是先执行完毕之后才执行test函数之后的console.log(2)呢？
// 既然是异步等待，那么应该先执行我console.log(2)再执行你test函数里面的await打印的啊。
// 关于这个问题是因为await console.log(1) 是因为await必须要拿到一个返回值之后它后面的任务才能做等待,
// 如果不给await一个值，那么即便添加了await那么它后面的任务还是按照同步来执行，接着往下看到最后你就明白了。

// var num = 0
// async function test () {
//     num++;
//     console.log('北京') // 北京
//     await console.log('await') // await
//     console.log(num) // 1
// }
// test()
// console.log(2)
// 最后我们发现执行顺序如下：
// 执行顺序：北京、await、2、1
// 这是为什么呢？ 我们知道async是异步的意思，但是你如果不加await告诉它是否等待，
// 那么它还是按同步操作来执行。


// var num = 0
// async function test () {
//     num++;
//     console.log('北京') // 北京
//     await
//         console.log(num) // 1
// }
// test()
// console.log(2)

// 执行顺序：北京、1、2
// 我们看到如果 await 什么都不返回那么还是按同步来执行，
// 意思说如果要让想让await做等待必须要给它一个值，即便是空字符串也行。

// async function timeOut() {
//     return 'hello world'
// }
// timeOut().then(result => {
//     console.log(result);
// })
// console.log('虽然在后面，但是我先执行');

// async function timeout(flag) {
//     if (flag) {
//         return 'hello world'
//     } else {
//         throw 'my god, failure'
//     }
// }
// console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
// console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。

// timeout(false).catch(err => {
//     console.log(err)
// })