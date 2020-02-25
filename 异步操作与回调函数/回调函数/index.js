//具有名子的回调函数
function name(res) {
    console.log(res);
    hTag.innerHTML = res;
};
function callBackName() {
    name('有名回调函数');
};
callBackName();
// 没有名字的回调函数
function callBackNoName(callBack) {
    //在这里写业务逻辑，当正确的时候把结果传给callBack调用方法，否则做拦截处理
    callBack('没有名字的回调函数');
}
callBackNoName(function (res) {
    console.log(res);
    hTag.innerHTML = res;
});
//还原没有名字的回调函数
function erreCallBack(res) {
    (function (res) {
        console.log(res);
        hTag.innerHTML = res;
    })(res)
};
erreCallBack('还原没有名字的回调函数')
// 回调函数分为两种：
// 一种是获取返回的结果值；
// 一种是设置返回的结果值；


// //还原没有名字的回调函数 错误写法
// function erreCallBack(res) {
//     function (res) {
//         console.log(res);
//     } (res)
// };
// erreCallBack('还原没有名字的回调函数')


