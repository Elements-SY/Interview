// async function timeOut() {
//     return 'hello world'
// }
// timeOut().then(result => {
//     console.log(result);
// })
// console.log('虽然在后面，但是我先执行');

async function timeout(flag) {
    if (flag) {
        return 'hello world'
    } else {
        throw 'my god, failure'
    }
}
console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。

timeout(false).catch(err => {
    console.log(err)
})