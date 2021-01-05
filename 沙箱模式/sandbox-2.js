var str1 = '沙箱模式1';
(function (global, factory) {
   console.log('自执行函数: ', str1)
}()); 

var str2 = '沙箱模式2'
!(function (global, factory) {
   console.log('自执行函数: ', str2)
}());