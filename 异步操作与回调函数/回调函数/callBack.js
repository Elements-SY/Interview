//还原没有名字的回调函数
function erreCallBack(res) {
    (function (res) {
        console.log(res);
        hTag.innerHTML = res;
    })(res)
};
erreCallBack('还原没有名字的回调函数')