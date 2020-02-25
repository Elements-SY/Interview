
//具有名子的回调函数
function name(res) {
    console.log(res);
    hTag.innerHTML = res;
};
function callBackName() {
    name('有名回调函数');
};
callBackName();