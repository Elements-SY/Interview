/*
什么是实例对象和实例方法?
我们通过new构造函数创建出来的对象就是实例化对象，
如果这个实例化对象的实例属性上挂载的function函数，我们就称之为实例化方法。
像是如下代码:
*/

// 静态对象
var obj = {
  name: '张三',
  fn: function () {
    console.log(this.name)
  }
}
/*
 像是obj就是一个静态对象，
 obj.name就是一个静态属性
 obj.fn()就是一个是个静态方法
*/

// 构造函数
function Puppy () {
  this.color = '白色',
    this.eat = function () {
      console.log('骨头')
    }
}
var puppy = new Puppy()
/*
 new Puppy();创建一个构造对象
 像是puppy就是一个实例对象，
 puppy.color就是一个实例属性
 puppy.eat()就是一个是个实例方法
*/
// 总结，静态方法或者静态属性是不能通过new来构造的，而是直接通过对象跟上点属性或者点调用方法来访问的。