// 沙箱模式：
(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
   : typeof define === 'function' && define.amd ? define(factory) :
   (global = global || self, global.Vue = factory());
 }(this, function () {
   'use strict';


 }
));

/*
  我们来分析一下沙箱模式中的三元表达式：
  typeof exports === 'object' // ES6规范
  typeof module !== 'undefined' // CommonJS规范 link: NodeJS
  typeof define === 'function' // 这种事AMD规范，link: https://requirejs.org/docs/whyamd.html
  
  上面的意思是如果在该环境下支持ES6 API的exports并且呢也支持CommonJS规范module属性也不等于undefined，
  那么把这个传过来的回调函数挂载到module.exports对象中。
  如果如果在该环境不下支持ES6 API的exports，也就是说前面的第一个条件不成立，那么走AMD规范，
  如果AMD规范这种规范也走不支持，那么就走最后一个(global = global || self, global.Vue = factory();
  OK,那我们来分析一下沙箱模式上述传参这段代码：
  我们传入的是一个this,也就是window对象，最后传一个匿名回调函数，紧接着匿名函数被执行。 

*/ 