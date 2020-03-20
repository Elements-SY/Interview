Vue.component('Texth', {
  render: function (createElement) {
    console.log(createElement)
    console.log(this.level)
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {},
})