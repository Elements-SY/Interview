var button = document.getElementsByTagName('button')[0]

// 员工信息
var staffInfo = { name: 'John', age: 24 }

// 工作人员 
var staff = new Proxy(staffInfo, {
    // proxyGet
    get(target, prop,property) {
        console.log(`被代理的staffInfo对象中的"${prop}"属性被调用了`);
        return target[prop];
    }
})

button.addEventListener('click', function () {
    staff // 不会触发Proxy代理对象的钩子函数get
    staff.name // 会触发Proxy代理对象的钩子函数get
    // staff.sex // 会触发Proxy代理对象的钩子函数get,但是不会继承staff对象中
    // staff.sex = 'girl' // 会触发Proxy代理对象的钩子函数get,会继承staff对象中
    // console.log(staff)
    // console.log(staffInfo)
})

/*
 总结：proxy 代理对象的get钩子函数就是用来获取对象的某属性，
 如果调用代理对象中属性就会触发get钩子函数。
 更多请参考: 
 link: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
*/
