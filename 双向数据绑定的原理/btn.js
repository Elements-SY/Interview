var getter = {
    set(val) {//如果obj对象的属性值被修改了，那么才会调用set方法并且才能拿到obj.name被修改的返回值
        console.log('set', val);
        p.innerHTML = val;
    },
    get() {//如果定义对象的属性被引用了那么才会执行get方法。
        console.log('get');
    }
}
Object.defineProperty(obj, 'names', getter);

oBtn.onclick = function () {
    obj.names = 'Susan';
    obj.names;
    console.log(obj);
}