var num = 1;
var obj = {
  num: 2,
  fn: function () {
    console.log(this.num)
    // return this;
  }
}
obj.fn()
var data = obj.fn;
data()
// 为什么打印 1 呢？不应该是 2 吗？

/*
  我们仔细分析一下，data是不是一个对象？是不是不是啊，因为你只是把obj的fn属性值赋给了data变量是不是？
  原来代码是不是就是如下这样的形式

  var num = 1;
  var data = function () {
      console.log(this.num)
  }

  那么如果你要把obj的fn属性值赋给了data变量的同时还要拿到obj对象的内存，是不是必须要在function里return一下this给
  obj对象的属性fn？

  fn: function () {
      console.log(this.num)
      return this;
  }

  是这样吗？我们来试试如下代码：
*/

/*
var num = 1;
var obj = {
  num: 2,
  fn: function () {
    console.log(this.num)
    return this;
  }
}
var data = obj.fn;
data().fn() // Uncaught TypeError: data.fn is not a function

我们发现不行啊，给干了一个错，究竟是为什么。我们来分析一下
obj.fn的确是给了一个return this;但是这个this是不是在函数被调用才赋予意义啊
你obj.fn赋值给data是不是没有被调用，等到你存到变量存的也是不是就一个函数的引用地址而已，
当你从变量存里去调用这个函数的引用地址，此时函数中的this是不是只能往上找，我们再来
还原一下代码：

fn: function () {
  console.log(this.num)
  return this;
  }

*/

/*
  var num = 1;
  var data = function () {
    console.log(this.num)
  }
  当data变量调用这个引用地址时你说这this是不是只能往全局找，所以打印1
*/