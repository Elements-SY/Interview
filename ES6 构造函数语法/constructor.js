// 一个类必须要有 constructor 方法，如果没有显示定义，
// 一个空的 constructor 方法会被默认添加实例的属性

// class Animal {
//   name = '猫咪'
// }
// 等同于
class Animal {
  constructor() {
    this.name = '猫咪'
  }
}
var animal = new Animal()
console.log(animal)