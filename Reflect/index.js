var button = document.getElementsByTagName('button')[0]
/*
  Reflect静态方法之Object;
  参数1 => 所要设置的对象; 
  参数2 => 设置对象的属性
  参数3 => 设置对象属性的值
*/ 
// 设置对象的属性和属性值
var obj = {};
Reflect.set(obj, "name", "John");
obj.name; // "John"
console.log(obj)

/*
  Reflect静态方法之Array;
  参数1 => 所要设置的数组对象; 
  参数2 => 数组的属性length或者下标，当为数组的下标时意为在数组指定的下标，
  第三个参数则为指定下标插入的值，如果指定的下标原本有值，那么将会被替换;
  当为数组的length时意为指定数组的长度，
  第三个参数则表示数组从左往右保留几个长度;
  参数3 => 设置指定数组下标插入的值或者截取的几个;
*/ 
// 指定下标
var arr = ["duck", "cow", "duck"];
Reflect.set(arr, 2, "goose");
console.log(arr) // ["duck", "cow", "goose"]

// 指定长度
Reflect.set(arr, "length", 2);
console.log(arr) // ["duck","cow"];

/*
  更多请参考: 
  link: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
*/  
