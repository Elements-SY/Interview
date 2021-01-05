var pet = {
   eat: function (color) {
      console.log(this.sex)
      console.log(this.food)
      console.log(`color：${color}`)
   }
}

var puppy = {
   sex: 'boy',
   color: 'black',
   food: 'bone'
}

var cat = {
   sex: 'girl',
   food: 'fish'
}

// 不传参时
var mimi = pet.eat.apply(cat)

var num;
console.log(`num: ${num}`)

// 传参时
// 如果apply在某个函数体内接收多个参数时，
// 可以使用arguments，例如：fn.apply(obj,arguments)
pet.eat.apply(cat,['white']) 

try {
   var dog = pet.apply(puppy) // Uncaught TypeError: pet.apply is not a function
   console.log(dog)
}
catch (err) {
   console.log(`%c${err}`,'color: #e80909')
}

console.log(mimi)
mimi.eat() // Uncaught TypeError: Cannot read property 'eat' of undefined


/*
 总结：在32行我们发现，apply和call两者只能通过一个方法的引用地址来传该继承，
 pet.eat.apply(cat)在传参之后被立即调用eat函数内存将被释放,至于mimi变量得到一个undefined,
 并不是函数没有返回值默认返回一个undefined，而是在pet.eat.apply(cat)被调用之后，mimi变量初始化时被赋予的。
 我们可以看第25行var num;就知道了。
 并且不会改变原来的对象本身，继承只能是在被调用时继承。
 
*/ 
