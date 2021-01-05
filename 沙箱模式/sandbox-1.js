// 沙箱模式：
var str = '沙箱模式'
(function (global, factory) {
    try {
      console.log('自执行函数: ', str)
    }
    catch (err) {
      console.log(`%c${err}`, 'color: #e80909')
    }
}());

/*
 输出结果：自执行函数: 沙箱模式 和 Uncaught TypeError: "沙箱模式" is not a function。
 这是为什么呢？其原因是自执行函数当作是一条执行的语句，在它前面必须要有 "!" 或者 ";"
 作为结束语句，不然就会报错。
 例如这样:
 
var str1 = '沙箱模式1';
(function (global, factory) {
   console.log('自执行函数: ', str1)
}()); 

或者

var str2 = '沙箱模式2'
!(function (global, factory) {
   console.log('自执行函数: ', str2)
}());

*/
