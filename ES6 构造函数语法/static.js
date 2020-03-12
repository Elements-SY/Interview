// static 关键字
// 如果在一个方法钱加上 static 关键字，就表示该方法不会被实例继承，而是通过类调用，成为静态方法。

// 实例对象
class Puppy {
  constructor() {
    this.name = '猫咪'
  }
  static likeEat () {
    return '鱼'
  }
}

// var puppy = new Puppy()
// console.log(puppy.likeEat()) // static.js:14 Uncaught TypeError: puppy.likeEat is not a function

// 实例对象
class Dog {
  constructor() {
    this.name = '小狗'
  }
  static likeEat () {
    return '骨头'
  }
}

console.log(Dog)
var puppy = Dog.likeEat()
console.log(puppy) // 骨头
