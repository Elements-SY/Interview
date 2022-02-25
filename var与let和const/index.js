// var a = 1;
// var a = 2;

// let b = 1;
// let b = 2;

// let不可重复定义同一个变量

// c = 3;
// console.log(c) // 3
// var c;

// d = 2
// let d;
// 不会变量提升

// const num = '张三'
// num = '李四'
// // 如果一个变量的值是一个基本数据类型的，那么不可修改变量的值

const obj = {
  name: '王五'
}
obj.name = '马六'
console.log(obj.name)

{
  const name = '张三';
  console.log(name);
}

const name = '李四';

// name = '李斯'
console.log(name);

let sy = Symbol("key1");
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}

/*
ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，
最大的用法是用来定义对象的唯一属性名。

ES6 数据类型除了 Number 、 String 、 Boolean 、 Object、 
null 和 undefined ，还新增了 Symbol 。

基本用法
Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象。
可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，
用来显示在控制台或者作为字符串的时候使用，便于区分。

let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"
 
// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
sy === sy1;       // false
*/ 