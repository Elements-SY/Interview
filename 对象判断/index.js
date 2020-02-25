function Whatclass() { };
var whatcalss = new Whatclass();
var sum = function () { };
var obj = {};
console.log(obj);//Object
console.log(Object.prototype.toLocaleString.call({}));//[object Object]
console.log(Object.prototype.toLocaleString.call(Array));//function Array() { [native code] }
console.log(Object.prototype.toLocaleString.call(Whatclass));//function Whatclass(){}
console.log(typeof sum);//function
console.log(Object.prototype.toString.call(sum));//[object Function]
console.log(Array.isArray([]));//true
console.log(obj instanceof Object);//true