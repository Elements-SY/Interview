<template>
  <div class="container">
    <nav>
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link :to="item.path">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/Home",
          name: "事件模型"
        },
        {
          path: "/eventCatch",
          name: "事件捕获"
        },
        {
          path: "/eventBubble",
          name: "事件冒泡"
        },
        {
          path: "/eventPrevent",
          name: "默认事件"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.container{
    nav{
        ul{
            display: flex;
            li{
                flex: 1;
                list-style: none;
                a{
                    text-decoration: none;
                    span{

                    }
                }
            }
        }
    }
}
</style>