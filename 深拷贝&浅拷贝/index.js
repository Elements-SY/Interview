let obj = {
  age: 1,
  personl: {
    name: '张三',
    action: '打篮球',
    hobby: () => {
      console.log(this.action)
    }
  }
}

// // 浅拷贝概念：浅拷贝的对象的地址/值
// // 浅拷贝
// let obj1 = obj
// obj.age = 2
// console.log(obj.age) // 2
// console.log(obj1.age) // 2

// // es6解构赋值拷贝
// let obj2 = { ...obj }
// obj.age = 2
// obj.personl.name = '李四'
// console.log(obj.age) // 2
// console.log(obj2.age) // 1
// console.log(obj.personl.name) // 李四
// console.log(obj2.personl.name) // 李四

// // Object.assign拷贝
// let obj3 = Object.assign({}, obj)
// obj.age = 2
// obj.personl.name = '李四'
// console.log(obj.age) // 2
// console.log(obj3.age) // 1
// console.log(obj.personl.name) // 李四
// console.log(obj3.personl.name) // 李四
// // 从上述我们不难发现我们可以看出es6解构赋值拷贝与Object.assign()拷贝的只是属性值，
// // 假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。

// // 深拷贝概念: 创建新的内存地址而不是拷贝原对象的引用地址
// // JSON.stringfy()拷贝
// var obj4 = JSON.parse(JSON.stringify(obj));
// obj.age = 2
// obj.personl.name = '李四'
// console.log(obj.age) // 2
// console.log(obj4.age) // 1
// console.log(obj.personl.name) // 李四
// console.log(obj4.personl.name) // 张三

// 递归拷贝
function deepClone (obj) {
  const targetObj = obj.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for (let keys in obj) { // 遍历目标
    if (obj.hasOwnProperty(keys)) {
      if (obj[keys] && typeof obj[keys] === 'object') { // 如果值是对象，就递归一下
        targetObj[keys] = obj[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(obj[keys]);
      } else { // 如果不是，就直接赋值
        targetObj[keys] = obj[keys];
      }
    }
  }
  return targetObj;
}
var obj5 = deepClone(obj);
obj.age = 2
obj.personl.name = '李四'
console.log(obj.age) // 2
console.log(obj5.age) // 1
console.log(obj.personl.name) // 李四
console.log(obj5.personl.name) // 张三

