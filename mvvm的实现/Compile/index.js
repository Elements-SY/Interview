const vm = new Vue({
  el: '#app',
  data: {
    name: '我的博客',
    title: '第一篇博客',
    time: '2018-12-10',
    content: '今天发布了我的第一篇博客，非常开心。'
  }
})
setTimeout(() => {
  vm.name = '网站标题更改了'
}, 3000)
setTimeout(() => {
  vm.title = '博客标题更改了'
}, 6000)
setTimeout(() => {
  vm.content = '博客内容也更改了'
}, 9000)