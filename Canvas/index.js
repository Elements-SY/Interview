// 获取canvas元素对象
var canvas = document.getElementById('canvas');
// 通过获取canvas元素对象调用canvas API 方法“canvas.getContext()”创建初始化一个canvas绘图的环境
// 指定绘图的环境的类型，是2d还是3d类型，在指定绘图的环境的类型后会创建一个 2d或者3d的上下文环境对象
var cvsCtx = canvas.getContext('2d');
// console.log(cvsCtx) // 获取canvas 2d上下文环境对象,该对象包含了canvas所有的API

// 只有在创建初始化一个canvas绘图的环境才能调用canvas环境对象的API进行绘制

// fillStyle & strokeStyle
// 1、fillStyle = color 设置图形的填充颜色
// cvsCtx.fillStyle = '#FF0000'
// 2、strokeStyle = color 设置图形轮廓的颜色
// 填充画布必须在绘制画布之前填充

cvsCtx.fillStyle = "red";
cvsCtx.strokeStyle = "red";

// 1、fillRect(x, y, width, height)：绘制一个填充的矩形。
// fill: 填充; rect: 矩形;fillRect: 填充矩形
var fillRect = {
  x: 0,
  y: 10,
  width: 150,
  height: 45
}
cvsCtx.fillRect(fillRect.x, fillRect.y, fillRect.width, fillRect.height);

// 2、strokeRect(x, y, width, height) ：绘制一个矩形的边框。
var strokeRect = {
  x: 0,
  y: 10,
  width: 160,
  height: 50
}
cvsCtx.strokeRect(strokeRect.x, strokeRect.y, strokeRect.width, strokeRect.height);

// 3、clearRect(x, y, widh, height) ：清除指定的矩形区域，然后这块区域会变的完全透明。

var clearRect = {
  x: 0,
  y: 10,
  width: 50,
  height: 45
}
cvsCtx.clearRect(clearRect.x, clearRect.y, clearRect.width, clearRect.height);

// fillStyle & strokeStyle
// 1、fillStyle = color 设置图形的填充颜色
// cvsCtx.fillStyle = '#FF0000'
// 2、strokeStyle = color 设置图形轮廓的颜色

// cvsCtx.fillStyle = "red";
// cvsCtx.strokeStyle = "red";

// 但是未发现填充canvas画布颜色,怎么回事呢?
// 因为这违背了先填充再绘制画布的规则，填充画布必须在绘制画布之前填充
// 就相当于清除画布必须在绘画之后清除画布一样。

