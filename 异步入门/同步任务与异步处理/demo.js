function Aiesec (fn) {
  this.value = undefined;
  this.then = (resolve) => {
    try {
      console.log(new Aiesec())
    }
    catch (err) {
      console.log(err.message) // fn is not a function
    }
    return new Aiesec(fn2 => {
      // console.log(fn2) // 打印结果如下：
      /*
        res => {
          this.value = res
        }
        为什么会打印出上述代码呢？
        OK我们在return实例对象之前打印一下实例对象试试看。
        结果给我报fn is not a function错误,并且是一个function函数，
        这就说明在Aiesec接受的这个fn参数被某个地方引用了，并且以函数的形式使用着,
        我们来看看哪个地方接受了fn参数并且定义成了function函数。
        我们发现原来
        fn(res => {
         this.value = res
        })
        把Aiesec接受的这个fn参数并以函数调用的方式给调用了。
        既然Aiesec要在做实例化对象的时候接受一个function函数，
        那我们就给它一个函数让
        fn(res => {
         this.value = res
        })
        调用去，但是我们又发现
         fn(res => {
          this.value = res
         })
        调用的时候又传来一个匿名函数，既然Aiesec要在做实例化对象的时候接受一个function函数，
         fn(res => {
          this.value = res
         })
         调用时又传过来一个匿名函数我们就要在Aiesec要在做实例化对象的时候接受一个function函数
         并且调用fn传过来的匿名函数并且给匿名函数传一个值过去。
      */
      this.value = resolve(this.value)
      fn2(this.value)
    })
  },
    fn(res => {
      this.value = res
    })
}
var aiesec = new Aiesec((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res)
  return res + 1;
}).then(res => {
  console.log(res)
})

// 这种写法逻辑好复杂，我们来看index-01.js中的写法