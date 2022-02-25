// var set = new Set(['a', 'b', 'a'])
// // console.log(set); // {"a", "b"}
// // console.log(set.size); // 2
// set.add('c') // 向Set数组中追加数据，
// set.add('d', 'e') // 只能一个一个追加不可一次追加多个，即便追加了多个还是会取第一个
// // console.log(set); // {"a", "b", "c", "d"}
// console.log(set.has('d')); // true
// // 判断Set有没有某个值使用has
// set.delete('b')
// console.log(set)
// // 删除Set数组中某个值使用 set.delete('b')
var set = new Set(['a', 'b', 'a'])
set.add('b')
console.log(set); // {"a", "b"}
  // Set返回一个没有重复的key, 不管向Set中追加多少个重复的值都不会重复