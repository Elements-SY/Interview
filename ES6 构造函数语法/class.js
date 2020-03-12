// // 传统写法
// function Animal (type, name) {
//   this.type = type;
//   this.name = name;
// }

// Animal.prototype.toString = function () {
//   return '(' + this.type + ',' + this.name + ')';
// };
// var m = new Animal('monkey', 'yuan');
// console.log(m) // {type: "monkey", name: "yuan"}
// console.log(m.toString()) // (monkey,yuan)

// class 写法 
// 声明一个Person类
// class Person {
// }

class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  toString () {
    return '(' + this.type + ',' + this.name + ')';
  }
}
var m = new Animal('monkey', 'yuan');
console.log(m) // {type: "monkey", name: "yuan"}
console.log(m.toString()) // (monkey,yuan)

// 通过 class 关键字可以定义类不再使用上述function模式的传统写法，而是通过 class 关键字
// 定义一个构造函数的calss类名，直接用对象字面量的方式包裹，
// 定义该类的属性写在构造器函数内，属性名和值，该属性的指向还是使用this,
// 可以通过构造器函数进行传参给所定义的属性
// ES6构造函数定义的原型上的方法不用通过定义的方法挂载到属性上，
// 亦不用写在ES6构造函数中构造器函数中，而是写在构造器函数外，使用ES6箭头函数即可。
