/*
 事件循环，
 宏任务和微任务
 定时器是宏任务还是微任务

微任务是异步任务中最早开始执行的那个任务
微任务：
Promise
Async/Await


宏任务会触发新一轮的事件循环
宏任务:
script（代码块）
setTimeout / setInterval 定时器
setImmediate 定时器

微观任务先于宏观任务

什么是事件循环？
事件循环是指，由于JS是单线程的，
为什么说JS是单线程的?
单线程的是指什么？
单线程是指同一时刻只能处理一个任务。
JS是单线程的但是浏览器是多线程的。

JS为什么要设计成单线程的这个问题我们来探讨一下，假设JS是多线程的。
那么在同一时间处理多个任务
*/ 
// 1 3 4 7 5 
// console.log(1)

// setTimeout1
// setTimeout(function () {
//   new Promise(function (resolve) {
//     console.log('promise in setTimeout1')
//     resolve()
//   }).then(function () {
//     console.log('then in setTimeout1')
//   })
// }, 0)

// new Promise(function (resolve) {
//   console.log(3)
//   for (var i = 10; i > 0; i--) {
//     i == 1 && resolve()
//   }
//   console.log(4)
// }).then(function () {
//   console.log(5)
// })

// setTimeout2
// setTimeout(function () {
//   console.log('setTimeout2')
// }, 0)

// console.log(7)

console.log('start')

// setTimeout(()=>{
//     console.log('timeout')
// },0)

new Promise((resolve,reject)=>{
    resolve()
    console.log('resolve')
}).then(()=>{
    console.log('then')
})

console.log('end')