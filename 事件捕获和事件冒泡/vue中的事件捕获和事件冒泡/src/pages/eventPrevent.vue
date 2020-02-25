<template>
  <div class="eventPrevent">
    <button @click.prevent="doThis">阻止默认事件</button>
  </div>
</template>
<script>
import { constants } from 'fs';
export default {
  data() {
    return {
     
    };
  },
  methods: {
    doThis(){
        console.log('A');
    }
  }
};
</script>
<style lang="less" scoped>

</style>