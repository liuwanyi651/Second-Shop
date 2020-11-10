import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
        component:Home,
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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
