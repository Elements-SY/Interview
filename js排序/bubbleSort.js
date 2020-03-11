// 冒泡排序
var arr = [2, 5, 4, 1, 7, 3, 8, 6, 9, 0];
var bubbleSort = function (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    // 从第0个开始
    for (var j = i + 1; j < arr.length; j++) {
      // 从第二个开始  
      if (arr[i] > arr[j]) {
        // 拿第每次都拿前一个与后一个做比较。
        var temp = arr[i];
        // 如果前一个比后一个大，那么就将这个保存下来给另一个变量存。
        arr[i] = arr[j];
        // 再将每次比较小的给向前挪一个位置。
        arr[j] = temp;
        // temp是每次都比前一个大，应该放置在后面。
        // arr[j]是每次都比后一个数小，每次都需要向前挪一个位置。既然temp每次都比前一个大，那么就必须要将temp往后挪。
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));