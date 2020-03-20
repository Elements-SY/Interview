new Vue({
  el: document.getElementById('box'),
  render: (h) => {
    console.log(h) // 返回如下代码
    // ƒ (a, b, c, d) { return createElement(vm, a, b, c, d, true); }
    return h('div', {
      //给div绑定样式
      style: {
        width: '300px',
        height: '300px',
        backgroundColor: '#ccc',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '300px',
      },
      domProps: {
        innerHTML: '点击我试试'
      },
      //给div绑定点击事件　　
      on: {
        click: () => {
          alert('点击事件')
        }
      },
    })
  }
})

