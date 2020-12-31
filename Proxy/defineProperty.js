var staff = {};
/*
Object.defineProperty之enumerable属性；
enumerable 定义了对象的属性是否可以在for...in循环和 Object.keys() 中被枚举。
*/
Object.defineProperty(staff, 'name', {
  value: '张三',
  enumerable: false
});

Object.defineProperty(staff, 'sex', {
  value: '男',
  enumerable: true
});

staff.age = 24; 

Object.defineProperty(staff, Symbol.for('age'), {
  value: 25,
  enumerable: true
});


for (var i in staff) {
  console.log(i);
}

console.log(staff)
console.log(staff.name)
console.log(staff[Symbol.for('age')])

