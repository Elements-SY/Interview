// 创建一个函数 CountZero(int n)
// 带入一个数字，可以返回从1到n所有数字出现的0的个数（ n为 [1, ∞) ）。
// 比如：
// n= 50 时，返回5（1，2，3 …… 10 …… 50  有5个0）
// n = 100 时，返回11（1，2，3 …… 10 …… 100；有11个零，100里有2个0）
// 1. 实现这个函数
// 2. 制作一个Html页面，包含一个输入，一个按钮，一个输出。输入数字，点击按钮，数字通过CountZero计算，页面上显示出结果。
// 3. 尽你可能把这个页面做的漂亮


var btn = document.getElementsByTagName('button')[0]
var inputs = document.getElementsByTagName('input')
var span = document.getElementsByTagName('span')[0]
var ul = document.getElementsByTagName('ul')[0];
var li = '';
btn.onclick = function () {
  let result = countZero(inputs[0].value, inputs[1].value);
  let time = countZero(inputs[0].value).length
  span.innerText = time
  result.map(val => {
    li += `<li>${val}</li>`;
  })
  // console.log(li);
  ul.innerHTML = li;
}
function countZero (val, number) {
  let num = 10;
  let target = number || 0
  let result = '';
  var length = [];
  for (let i = 1; i <= val; i++) {
    if (i % num == target) {
      result = i.toString();
      length.push(result)
      result = result.substr(1);
    }
  }
  return length;
}
