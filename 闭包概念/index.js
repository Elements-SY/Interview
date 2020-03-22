function num () {
  var count = 0;
  return function () {
    count++; // 内部函数的父函数被调用时会形成一个执行栈,并且把内部的函数的引用地址向执行栈内部压栈，
    console.log(count)
  }
}
// num()() // 1
// num()() // 1
// num()() // 1
var countNum = num(); // 这一步是调用栈创建一个执行栈环境,并且把父函数内部的子函数的引用地址作为countNum变量来保存。
// 父函数num函数内部的子函数的引用地址交给了countNum变量作为保存，
// 每次去调用父函数内部的子函数时，都会向执行栈内部插入新的数据，
// 
console.log(countNum)
countNum() // 1
countNum() // 2
countNum() // 3

// 执行栈内部引用着一个函数的引用地址，每次去调用执行栈内部的函数时都会向执行栈插入新的数据。
function count () {
  var num = 0;
  return function () {
    num++;
    console.log(num)
  }
}
var fnCount = count();
/*
函数在执行期会创建一个执行栈，而这个执行栈被作为一个变量作为保存，
或者说count函数开辟的内存作为变量保存起来了，保存到栈内存中。
在这个栈内存中还引用这一个父函数内部子函数的引用地址，
而这个子函数内部又引用这执行栈的一个变量。
每次去执行父函数内部的子函数时都会向栈内存中插入新的数据。

*/