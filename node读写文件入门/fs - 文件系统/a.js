const fs = require('fs');
let path = './fs - 文件系统.txt';
let options = {
	encoding: 'utf-8',
};
let callback = (err, data) => {
	if (err) throw err;
	console.log(data);
};
fs.readFile(path, options, callback);
