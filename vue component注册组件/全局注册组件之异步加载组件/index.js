const el = {
  h1: '<h1 style="text-align: center;">全局注册组件之异步加载组件</h1>',
}
// 全局注册组件之异步加载组件
Vue.component('text-h1', function (resolve) {
  /*
  console.log(resolve) // resolve返回一个匿名函数
  ƒ () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
  */
  resolve({
    template: el.h1
  })
});
var app = new Vue({
  el: '#app',
  data: {
    level: 2
  }
})
/*
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
*/