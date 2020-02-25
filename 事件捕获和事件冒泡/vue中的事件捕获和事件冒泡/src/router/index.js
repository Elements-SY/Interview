import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages' //同步加载路由组件
const Home = () => import('@/pages/home') // es6 import 方法异步加载路由组件
const eventCatch = resolve => require(['@/pages/eventCatch'],resolve) // node.js 方法异步加载路由组件
const eventBubble = r => require.ensure([],()=>r(require('@/pages/eventBubble')),'chunkname') // webpack2.0 中的 require.ensure() 方法异步加载路由组件
const eventPrevent = r => require.ensure([],()=>r(require('@/pages/eventPrevent')),'chunkname')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/Home',
          name: 'home',
          component: Home
        },
        {
          path: '/eventCatch',
          name: 'eventCatch',
          component: eventCatch
        },
        {
          path: '/eventBubble',
          name: 'eventBubble',
          component: eventBubble
        },
        {
          path: '/eventPrevent',
          name: 'eventPrevent',
          component: eventPrevent
        },
      ]
    }
  ]
})
