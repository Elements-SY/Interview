// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    //return num;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 1000);
    } )
};

async function testResult() {
    let result = await doubleAfter2seconds(30);
    console.log(result);
};
testResult();

//async await后面可以放任何表达式，不过await后面更多的是放一个返回promise 对象的表达式

/*

await得到Promise对象之后就等待Promise接下来的resolve或者reject。

如果async函数中是return一个值，这个值就是Promise对象中resolve的值；

如果async函数中是throw一个值，这个值就是Promise对象中reject的值。

async返回的都是一个Promise对象同时async适用于任何类型的函数上；

async可以独立单用，但是await关键字只能放到async 函数里面配合async使用；

Generator 函数是分段执行的，在函数执行下一步时，必须调用遍历器对象的next方法，

使指针移向下一个状态。

也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，

直到遇到下一个yield表达式或return语句。

yield表达式是暂停执行的标记，而next方法可以恢复执行。也就是上面说的可以交出函数的执行权。

上面对Generator函数做了一个简单的介绍，接下来说一下async/await和Generator。

根据阮一峰老师的介绍，async函数就是Generator函数的语法糖。



（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
 
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，
就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。
那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复这个过程就是事件循环。



为什么会有事件循环的出现？
说到事件循环我们不得不说一下
由于JS是单线程的，所有同步任务执行时会在主线程上形成一个执行栈，

*/