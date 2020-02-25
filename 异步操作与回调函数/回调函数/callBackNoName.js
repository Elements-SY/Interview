//没有名字的回调函数
function callBackNoName(callBack) {
    //在这里写业务逻辑，当正确的时候把结果传给callBack调用方法，否则做拦截处理
    callBack('没有名字的回调函数');
}
callBackNoName(function (res) {
    console.log(res);
    hTag.innerHTML = res;
});