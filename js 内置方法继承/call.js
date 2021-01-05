var pet = {
   eat: function (color,age) {
      console.log(this.sex)
      console.log(this.food)
      console.log(`color：${color}`)
      console.log(`age：${age}`)
      // return {name: '张三'}
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
var mimi = pet.eat.call(cat)

var num;
console.log(`num: ${num}`)

// 如果传参时call不能使用一个集合传递参数['white',2]，否则，
// 接收有效参数只有第一个，假设传递参数['white',2]那么第一个输出'white',2，其他参数都是undefined
pet.eat.call(cat,'white',2) // ['white',2]

try {
   var dog = pet.call(puppy) // Uncaught TypeError: pet.call is not a function
   console.log(dog)
}
catch (err) {
   console.log(`%c${err}`,'color: #e80909')
}

console.log(mimi)
mimi.eat() // Uncaught TypeError: Cannot read property 'eat' of undefined

/*
 总结：在33行我们发现，apply和call两者只能通过一个方法的引用地址来传该继承，
 pet.eat.call(cat)在传参之后被立即调用eat函数内存将被释放,至于mimi变量得到一个undefined,
 并不是函数没有返回值默认返回一个undefined，而是在pet.eat.call(cat)被调用之后，mimi变量初始化时被赋予的。
 我们可以看第25行var num;就知道了。
 并且不会改变原来的对象本身，继承只能是在被调用时继承。
 
*/ 
