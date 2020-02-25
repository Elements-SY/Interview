class TemplateCompiler {
    constructor(el, vm) {
        this.el = this.isEleNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        if (this.el) {
            var fragment = this.nodefragments(this.el);
            this.complie(fragment);
            this.el.appendChild(fragment);
        }
    };
    isEleNode(node) {
        return node.nodeType === 1;
    }
    toArray(fakeArr) {
        return [].slice.call(fakeArr);
    }
    isBind(attrName) {
        //console.log(attrName);
        return attrName.indexOf('v-')>=0;
    }
    nodefragments(node) {
        //console.log(node.firstChild);
        var fragment = document.createDocumentFragment();
        var child;
        while (child = node.firstChild) {
            fragment.appendChild(child);
        }     
        return fragment;
    }
    complie(parent) {
        var _this = this;
        var childNodes = parent.childNodes;
        // console.log(childNodes);//NodeList(8) [text, h2, br, text, br, text, p, text]
        // console.log(this.toArray(childNodes));//[text, h2, br, text, br, text, p, text]
        this.toArray(childNodes).forEach(node => {     
            if (_this.isEleNode(node)) {
                _this.complieEle(node);
            }
        })
    }
    complieEle(node) {
        var complier = this;
        var attrArr = node.attributes;
        //console.log(attrArr);//
        this.toArray(attrArr).forEach(attr => {
            var attrName = attr.name;
            // console.log(attr);// v-text="message"
            // console.log(attr.name);// v-text
            // console.log(attr.value);// message    
            if (complier.isBind(attrName)) { //isBind方法是用来查找 v- 的，如果找到则返回布尔值
                var expr = attr.value;  
                // console.log(type);// text
                complierUtils.text(node, complier.vm, expr);
            }
        })
    }
}
complierUtils = {
    text(node, vm, expr) { 
        var updataFn = this.updater['textUpdater'];
        updataFn && updataFn(node, vm.$data[expr]);
    },
    updater: {
        textUpdater(node, value) {
            node.textContent = value;
        }
    }
}