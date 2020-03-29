// const arr = new Map(['names', '李四']); // Uncaught TypeError: Iterator value name is not an entry object
// const arr = new Map([['name', '张三']]); 
// console.log(arr);//{"name" => "张三"}
// console.log(arr.get('name')); // 张三

// Set和Map都可以用来生成新的 Map接收的参数都是一个二维数组，子项数作为二维组转换成一个json对象的key和value;
// 不同的是Set转换成的是一个没有键的key值
// const map = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);

// console.log(map.size) // 2
// console.log(map.has('name')) // true 判断Map有没有某个属性使用has
// console.log(map.get('name')) // "张三"
// console.log(map.has('title')) // true 
// console.log(map.get('title')) // "Author"
// map.set(1) // Map.set() 接收两个参数，一个是属性key，一个是属性key的value值，如果不设置第二个参数默认为undefined
// console.log(map) // {"name" => "张三", "title" => "Author", 1 => undefined}
