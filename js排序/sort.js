// sort不传参数，将不会按照数值大小排序，按照字符编码的顺序进行排序
var arr = ['General', 'Tom', 'Bob', 'John', 'Army'];
// var resArr = arr.sort();
// console.log(resArr);//输出   ["Army", "Bob", "General", "John", "Tom"]

// 如果是对字母排序不需要传参，如果传参是不会按照字符集编码进行排序的
arr.sort(function (a, b) {
  return a - b;
})
console.log(arr); // ['General', 'Tom', 'Bob', 'John', 'Army']

var arr1 = [30, 10, 111, 35, 1899, 50, 45];

// 如果是数字升序排序,则a-b 
arr1.sort(function (a, b) {
  return a - b;
})
console.log(arr1);//输出  [10, 30, 35, 45, 50, 111, 1899]
// 如果是数字降序排序,则b-a
arr1.sort(function (a, b) {
  return b - a;
})
console.log(arr1);//输出 [1899, 111, 50, 45, 35, 30, 10]

// 如果是根据数组中的对象的某个属性值排序
var arr2 = [{ id: 10 }, { id: 5 }, { id: 6 }];
arr2.sort(function (a, b) {
  return a.id - b.id
})
console.log(arr2); // [{ id: 2 }, { id: 3 }, { id: 5 }, { id: 6 }]