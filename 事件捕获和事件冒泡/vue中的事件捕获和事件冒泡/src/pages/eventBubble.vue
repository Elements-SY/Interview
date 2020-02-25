<template>
  <div class="eventBubble">
    <h2>事件冒泡和事件捕获的阶段不一样</h2>
    <h2>事件冒泡是从最深的子节点元素的事件向上传递</h2>
    <div id="obj1" @click="doc">
      obj1
      <div id="obj2" @click="doc">
        obj2
        <div id="obj3" @click="doc">
          obj3
          <div id="obj4" @click="doc">
            obj4
            <!--。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。点击obj4的时候，弹出的顺序为：obj1、obj2、obj4、obj3；
          由于1，2有修饰符，故而先触发事件，然后就是4本身触发，最后冒泡事件。
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    doc() {
      this.id = event.currentTarget.id;
      console.log(this.id);
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
}
#obj1 {
  background: deeppink;
}
#obj2 {
  background: rgb(20, 13, 17)
}
#obj3 {
  background: hotpink;
}
#obj4 {
  background: #ff4225;
}
</style>