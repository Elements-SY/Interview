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