// 获取canvas元素对象
var canvas = document.getElementById('canvas');
// 通过获取canvas元素对象调用canvas API 方法“canvas.getContext()”创建初始化一个canvas绘图的环境
// 指定绘图的环境的类型，是2d还是3d类型，在指定绘图的环境的类型后会创建一个 2d或者3d的上下文环境对象
var cvsCtx = canvas.getContext('2d');
// console.log(cvsCtx) // 获取canvas 2d上下文环境对象,该对象包含了canvas所有的API

// 只有在创建初始化一个canvas绘图的环境才能调用canvas环境对象的API进行绘制

// 绘制三角形
cvsCtx.beginPath();
cvsCtx.moveTo(50, 50);
cvsCtx.lineTo(200, 50);
cvsCtx.lineTo(100, 100);
cvsCtx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
cvsCtx.stroke(); //描边。stroke不会自动closePath()