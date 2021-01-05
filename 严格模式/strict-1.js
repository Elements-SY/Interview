"use strict";
myFunction();
function myFunction() {
   try {
      y = 3.14;   
   } catch (err) {
      console.log(err) // ReferenceError: y is not defined
   }

   console.log('全局声明了严格模式中的this值为: ',this) // undefined
}