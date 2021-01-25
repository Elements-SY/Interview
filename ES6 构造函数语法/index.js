//  创建一个只有方法的class类
class Construct {
   // name: '张三',
   // age = '18',
   // this.job = '社科管理',
   say() {
      console.log('say方法：', this)
   }
}

var construct = new Construct()
console.log(construct)
construct.say()

/*
 从上述我们发现如果没有构造器类的属性成员是没办法定义的。
 也就是说当实例化类时，默然会执行constructor构造器。
*/

/*
 通过ES创建一个类 
*/
class Construct1 {

}

var construct1 = new Construct1()
console.log(construct1)
/*
  打印如下：
  console.log(construct1)打印如下:
  ▼Construct1 {}
  ▼__proto__:
  ►constructor: class Construct1
  ►__proto__: Object
*/


/*
 通过ES创建具有构造器的一个类 
*/
class Construct2 {
   constructor() {

   }
}

var construct2 = new Construct2()
console.log(construct2)
/*
  打印如下：
  console.log(construct2)打印如下:
  ▼Construct2 {}
  ▼__proto__:
  ►constructor: class Construct2
  ►__proto__: Object

  从上述我们不难发现如果没有定义consructor构造器，
  系统会默认添加上。
*/

// 创建一个具有构造属性成员和方法的类
class Construct3 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   run() {
      console.log('姓名：', this.name)
   }
}

var construct3 = new Construct3('张三', '24')
construct3.run()


// 继承 1
class Animal1 {
   constructor() {
      this.color = '白色'
      this.food = '鱼'
   }
   likeEat() {
      console.log('小猫爱吃：', this.food)
   }
}

// 具有构造器的继承
class Cat extends Animal1 {
   constructor() {
      super()
   }
}

var cat = new Cat()
console.log(cat)
cat.likeEat()

// 继承 2
class Animal2 {
   constructor() {
      this.color = '白色'
      this.food = '骨头'
   }
   likeEat() {
      console.log('小狗爱吃：', this.food)
   }
}

// 没有构造器的继承
class Puppy extends Animal2 {
   feedding() {
      console.log('进食: ', this.food)
   }
}

var puppy = new Puppy()
console.log(puppy)
puppy.likeEat()
puppy.feedding()

/*
 在上述继承 1 和 继承 2 示例情况如下文：
 继承 1: 
 如果子类去继承父类定义了constructor(){}构造器，
 那么必须要在该构造器中执行super方法，
 否则会报错。(派生类的构造函数必须包含 "super" 调用。)
 
 继承 2:
 如果子类去继承父类没有定义了constructor(){}构造器，
 那么同样可以继承父类没必要调用super方法，不会报错。
 因为在实例化Puppy时，系统默认会添加并且调用constructor(){}构造器。
*/ 