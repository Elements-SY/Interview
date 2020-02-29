function Whatclass () { };
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

var obj1 = undefined;
var obj2 = null;
console.log(obj1 instanceof Object);//false
console.log(obj2 instanceof Object);//false
// 因为它们都是值类型的并且没有原型