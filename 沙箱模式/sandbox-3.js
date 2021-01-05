/*
 沙箱模式传参模式
*/ 

!(function (global, fn) {
   console.log('global: ', global)
   fn()
}(this,function(){
   console.log('fn')
}));

/*
 传递一个全局this和一个匿名函数，紧接着被执行;
*/ 