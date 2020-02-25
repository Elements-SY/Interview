Object.defineProperty(obj, "userName", {
    set (v) {
        console.log(v);
        inp.value = p.innerHTML = v;
    },
    get () {

    }
});
inp.onkeyup = function () {
    obj.userName = this.value
};
