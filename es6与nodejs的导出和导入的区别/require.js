var personName = require('./exports');
var personAge = require('./module.exports');
personName.name(); // 使用exports导出姓名
personAge.age(); // 使用module.exports导出年龄