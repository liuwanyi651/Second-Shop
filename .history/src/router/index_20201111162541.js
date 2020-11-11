import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/Layout.vue'
import home from '../views/layout/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: layout,
    children:[
      {
        path:'/',
        name:'home',
        component:home,
        meta:{
          title:'首页'
        }

      },
      {
        path:'/class',
        name:'class',
        component:() =>import('../views/layout/class/Class.vue'),
        meta:{
          title:'分类'
        }
      },
      {
        path:'/cart',
        name:'cart',
        component:() =>import('../views/layout/cart/Cart.vue'),
        meta:{
          title:'购物车'
        }
      },
      {
        path:'/mine',
        name:'mine',
        component:() =>import('../views/layout/mine/Mine.vue'),
        meta:{
          title:'我的'
        }
      }

    ]
  },
  {
    path: '/register', 
    name: 'register', //这是注册页面
    component:() =>import('../views/register/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  //所有路由之后最后 配置一个错误路由
  {
    path:"*",//如果我之前的都没有匹配到,就会匹配到这个*的路由
    component:() =>import('../views/404/404.vue')
  }


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to,form,next) =>{
//   //动态改变浏览器的标题
//   document.title = to.meta.title
//   // next()
//   let user = localStorage.getItem('user')
//   if(to.path === '/login' || to.path === '/register'){next()}else{
//     console.log(user);
//     user ? next():(next('/login') || next('/register'))
//   }

// })

export default router
