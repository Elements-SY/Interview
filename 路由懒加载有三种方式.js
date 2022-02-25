/*
路由懒加载有三种方式，一是使用node的require方法，一种是使用es6的import方法。
//node的require方法
{           
　path: '/home',           
　name: 'home',           
　component: resolve => require([" "], resolve)       
}
//es6的import方法
{   
　　path: '/home',   
　　name: 'home',            
　  component: () => import('')       
},
// r就是resolve
ensure 英[ɪnˈʃʊə(r)] v. 确保、保证
ensure可以拆分 en sure; en是English；sure是确保 
const list = r => require.ensure([], () => r(require(' ')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
    routes: [
        {
           path: '/list/blog',
           component: list,
           name: 'blog'
        }
    ]
})
*/