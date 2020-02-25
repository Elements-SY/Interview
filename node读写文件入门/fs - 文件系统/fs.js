const fs = require('fs');
let path = './fs - 文件系统.txt';
//let data = Buffer.from([60,230,150,135,228,187,182,229,134,133,229,174,185,62]);
let data = '小雨';
let options;
let callback = (err) => {
	if (err) throw err;
	console.log(fs.readFileSync(path, 'utf8'));
};
fs.writeFile(path, data, options, callback);

/*
node 系统文件模块，一般这几个参数少不了：
1：一个是读写文件的对象也就是文件所在路径的位置
2：以哪种编码读写文件
3：读写文件之后的回调函数

对于js某些选择器低版本浏览器不支持，我们可以才用操作DOM的方式，比如jQuery就是这么干。

当然也可以通过判断一个元素上的calssName 、id的值是否等于查询的来判断




*/