function Compile(el, value) {
  this.$val = value;
  this.$el = document.querySelector(el);
  if (this.$el) {
    this.compileElement(this.$el);
  }
}
Compile.prototype = {
  compileElement: function (el) {
    let self = this;
    let childNodes = el.childNodes;
    [].slice.call(childNodes).forEach(node => {
      let text = node.textContent;
      let reg = /\{\{((?:.|\n)+?)\}\}/;
      // if (node.nodeType === 3 && reg.test(text)) {
      if (reg.test(text)) {
        if (typeof this.$val[RegExp.$1.trim()] === 'undefined') {
          node.textContent = '';
        } else {
          node.textContent = this.$val[RegExp.$1.trim()];
        }
      };
      self.compileElement(node);
    })
  },
}