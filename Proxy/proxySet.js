var button = document.getElementsByTagName('button')[0]

// Proxy
// 员工信息
var staffInfo = { name: 'John', age: 24 }

// 工作人员 
var staff = new Proxy(staffInfo, {
    // proxySet
    set(target, prop, value) {
        console.log(`被代理的staffInfo对象中的"${prop}"属性被调用了`);
        return target[prop];
    }
})

// Object.defineProperty
var personl = { name: '张三', sex: 'boy' };
var defined = Object.defineProperty(personl, "name", {
    // 定义了 value 或 writable , 一定不能有 get 或 set, 反之亦然, 否则报错
    // 如果不指定这些属性描述符，默认都是false
    configurable: false, // 是否对劫持的属性是否可被删除or是否能改变
    enumerable: false, // 该属性在当前文件夹中的defineProperty.js做了单独讲解
   //  value: '李四',
    // writable: false, // 是否允许修改描述的对象属性"age"
    get(val) {
        console.log('当前Object.defineProperty之get方法执行了')
        console.log(`当前Object.defineProperty之get设置的值为：${val}`)
        return '孙宇'
    },
    set(val) {
        console.log(`当前Object.defineProperty之set设置的值为：${val}`)
    }
});

button.addEventListener('click', function () {
    staff // 不会触发Proxy代理对象的钩子函数set
    staff.name // 不会触发Proxy代理对象的钩子函数set
    staff.sex // 不会触发Proxy代理对象的钩子函数set,但是不会继承staff对象中
    staff.sex = 'girl' // 会触发Proxy代理对象的钩子函数set,但不会继承staff对象中
    staff.name = '张三' // 会触发Proxy代理对象的钩子函数set,但不会改变staff对象中的name属性值
    console.log(staff)
    console.log(staffInfo)
    console.log(`------------------------\n Object.defineProperty对象劫持对比Proxy代理对象`)
    defined.name = '王五' // 如果 writable值为false将不会被修改
    defined.age = 26 // writable值不论true或者false都会被修改,因为劫持的对象属性不是age而是name属性
    defined.name
    console.log(defined)
    console.log(defined.name)
})


/*
 总结：proxy 代理对象的set钩子函数就是用来获取修改对象的某属性值，
 如果修改代理对象中属性值就会触发set钩子函数。
 更多请参考:
 link: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
*/
