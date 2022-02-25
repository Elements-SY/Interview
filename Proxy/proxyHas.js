var button = document.getElementsByTagName('button')[0]

// proxyHas
function proxyHas(obj) {
   return new Proxy(obj, {
      has(target, prop) {
         /*
          判断该目标对象是否存在该属性，
          如果目标对象中有该属性返回true。
         */ 
         if (prop in target) {
            return true
         } else {
            return false
         }
      }
   })
}

// 员工信息
var staffInfo = { name: 'John', age: 24 }

// 工作人员
var staff = { sex: 'boy', age: 25, name: '张三' }

// 【员工信息】代理对象之钩子函数has
var proxy_has = proxyHas(staffInfo)

button.addEventListener('click', function () {
   // console.log(proxyHas(staffInfo))
   // 遍历对象中是否在员工信息存在某属性
   Object.keys(staff).forEach(key => {
      console.log(proxy_has)
      if (key in proxy_has) {
         console.log(`在staffInfo对象找到的属性有: ${key}`)
      } else {
         console.log(`在staffInfo对象未找到的属性有: ${key}`)
      }
   })
})

/*
 总结：proxy 代理对象的has钩子函数就是用来查找代理的对象是否存在某属性，
 有则返回true，无则返回false,当然也可以返回找到的属性。
 更多请参考: 
 link: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
*/ 
