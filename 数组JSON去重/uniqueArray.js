// 数组JSON去重
// uniqueArray(array, 'key')
var arr = [{ name: '张三', age: 21 }, { name: '李四', age: 22 }, { name: '王五', age: 23 }, { name: '马六', age: 21 }, { name: '马冬梅', age: 24 }]
function uniqueArray (array, key) {
  var result = [array[0]]; // 目的是获取数组里的第一项对象
  for (var i = 1; i < array.length; i++) {
    // var item = array[i]; // 获取数组里的每一项对象
    var repeat = false;
    // 遍历result数组里的对象key值如果等于外循环当前遍历数组里对象的key值就终止内循环
    // 当内循环每次遍历走if语句都不满足条件时就会走外循环的if语句，并且把不相等的项push到result数组里
    // 如果相等把repeat重复的节流阀设置为true,而外循环的if原本为false的重置为true取反为false则不走外循环的if语句
    for (var j = 0; j < result.length; j++) {
      if (array[i][key] == result[j][key]) {
        repeat = true;
        break;
      }
    }
    console.log(repeat)
    if (!repeat) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(uniqueArray(arr, 'age')) // [{name: '张三',age: 21},{name: '李四',age: 22},{name: '王五',age: 23},{name: '马冬梅',age: 24}]
