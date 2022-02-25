/*

proxy与Object.defineProperty的区别:


Object.defineProperty

只能监听对象(Object)，不能监听数组的变化，无法触发push, 
pop, shift, unshift,splice, sort, reverse。
必须遍历对象的每个属性
只能劫持当前对象属性，如果想深度劫持，必须深层遍历嵌套的对象

Proxy

Proxy可以直接监听对象而非属性
Proxy直接可以劫持整个对象,并返回一个新对象。
Proxy可以直接监听数组的变化
Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、
has等等是Object.defineProperty不具备的。

用法

由于每一个 Symbol 的值都是不相等的，所以 Symbol 作为对象的属性名，
可以保证属性不重名。

let sy = Symbol("key1");

// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，
所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性。

let syObject = {};
syObject[sy] = "kk";

syObject[sy];  // "kk"
syObject.sy;   // undefined

*/ 