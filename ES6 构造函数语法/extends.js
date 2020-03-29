// // extends 与 super
// class Dog {
//   constructor() {
//     this.name = '小狗'
//     this.food = '骨头'
//   }
//   likeEat () {
//     return '肉'
//   }
// }

// class Animal extends Dog {
//   name = '猫咪'
//   color = '白色'
//   likeEat () {
//     return '鱼'
//   }
// }
// var animal = new Animal();
// console.log(animal) // {name: "猫咪", food: "骨头", color: "白色"}
// console.log(animal.likeEat()) // 鱼


// 从上述可以发现Animal继承Dog时，如果方法或者属性有重名的会被Animal给覆盖
// extends会继承来自原型上的，但是不能继承构造器中的。
// 如果直接extends继承构造器会报错，必须使用super来继承构造器上的。
// 我们先看一下直接extends继承构造器和原型看看会咋样。
// 代码如下:

// class Dog {
//   constructor() {
//     this.name = '小狗'
//   }
//   likeEat () {
//     return '骨头'
//   }
// }

// class Animal extends Dog {
//   constructor() {
//     this.color = '白色'
//   }
// }
// var animal = new Animal();
// console.log(animal)

/*
 这样写会报错，extends只能继承来自Animal原型上的，不能继承Animal 构造器上的(constructor)，
 如果要想继承Animal 构造器上的(constructor)的需要使用super代码如下:
*/

class Dog {
  constructor() {
    this.name = '小狗'
    this.food = '骨头'
  }
  likeEat () {
    return '肉'
  }
}

class Animal extends Dog {
  constructor() {
    super(name); // 用来接受继承Dog构造函数中的构造器内部的私有成员
    this.color = '白色'
  }
  eat () {
    return this.food + '_' + super.likeEat();
  }
}
var animal = new Animal();
console.log(animal) // {name: "小狗", color: "白色"}
console.log(animal.likeEat()) // 骨头
console.log(animal.eat()) // 骨头_肉
