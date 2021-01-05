var a = {
	b : function(){
		var func = function(){
         console.log(this); // window
			console.log(this.c); // undefined
		}
		func();
	},
	c : 'Hello!'
}
/*
总结：我们通过a调用b方法时，b方法里有个立即执行函数,
在es3中的this指向指向的是事件调用的对象，所以这里事件调用的对象仅是b函数，
func函数只能说是在b函数体内的一个回调函数而已。
*/
a.b(); 

var a = {
	b : function(){
		var func = ()=>{
         console.log(this); // {c: "Hello!", b: ƒ}
			console.log(this.c); // Hello!
		}
		func();
	},
	c : 'Hello!'
}
/*
总结：我们通过a调用b方法时，b方法里有个立即执行函数,
与上述不同的是this却不是window，this.c也不是undefined，
其原因是es6中的箭头函数的this与es3中的this指向不同，
箭头寒暑假中的this指向被定义的上下文，也就是该this不是在调用时被赋予指向，
而是在定义上下文时就已经把this的指向定义好了。
*/
a.b(); 

var a = {
	b : function(){
		var that = this;
		var func = function(){
			console.log(that.c); // Hello!
		}
		func();
	},
	c : 'Hello!'
}
/*
总结：通过在b函数体内保存了b函数的this指向，在执行func函数时引用了b函数的this
*/
a.b();

var a = {
	b : function(){
		var func = function(){
			console.log(this.c); // Hello!
		}.bind(this);
		func();
	},
	c : 'Hello!'
}
/*
总结: 在调用b函数时，将b函数的this绑定在func函数的作用域中。
*/
a.b(); 
 
var a = {
	b : function(){
		var func = function(){
			console.log(this.c); // Hello!
		}
		func.bind(this)();
	},
	c : 'Hello!'
}
/*
 总结: 在调用b函数时，在调用func函数时this发生改变
*/
a.b();