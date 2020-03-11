<template>
  <div class="mvvm">
    <h3 v-for="(item,index) in dataList" :key="index">{{ item.type | getType }}</h3>
    <h3>张三</h3>
    <h3>李四</h3>
    <h3>王五</h3>
  </div>
</template>

<script>
export default {
  name: 'mvvm',
  data () {
    return {
      dataList: [
        { type: 1 },
        { type: 2 },
        { type: 3 }
      ]
    }
  },
  filters: {
    getType: function (type) {
      switch (type) {
        case 1:
          return '张三'
          break
        case 2:
          return '李四'
          break
        default:
          return '王五'
          break
      }
    }
  }
}
</script>