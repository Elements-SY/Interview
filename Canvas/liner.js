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

// 1、beginPath()
// 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径

// 2、moveTo(x, y)
// 该方法把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标和结束坐标，并非创建线条。
// moveTo(x, y)就是指定画笔在画布的起点位置,与线段的长度无关。

// 3、lineTo(x, y) 
// 路径的目标位置的 x 坐标;
// 路径的目标位置的 y 坐标。
// 该方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）

// 4、closePath()
// 闭合路径之后，图形绘制命令又重新指向到上下文中

// 5、stroke()
// 该方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。

// 6、fill()
// 通过填充路径的内容区域生成实心的图形

// 绘制线段
cvsCtx.beginPath(); // 新建一条path
cvsCtx.moveTo(100, 100); // 把画笔移动到指定的坐标（x轴和y轴的开始坐标和结束坐标）
cvsCtx.lineTo(0, 100);  // 绘制一条从当前位置到指定坐标(200, 50)的直线.
// 闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
// cvsCtx.closePath();
cvsCtx.stroke(); //绘制路径。