// 伪数组转数组
var elArr = document.querySelectorAll('p');
var elSapn = document.getElementsByTagName('span');
var arr = [];
for (var i = 0; i < elArr.length; i++) {//方法一
  arr.push(elArr[i]);
}
console.log(arr);
console.log(Array.prototype.slice.call(elArr));//方法二
console.log([].slice.call(elArr));//方法三
let newArr = [...elArr];//方法四es6赋值结构
console.log(newArr);
let arrSpan = [...elSapn];//方法四es6赋值结构
console.log(arrSpan);