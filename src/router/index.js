import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import AddProduct from '../views/manage/productForm'
import Login from '../views/login'
import IndexMain from '../components/IndexMain'
import ProductDetail from '../views/productDetail'
import Cart from '../views/cart'
import Test from '../views/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    component: Index,
    redirect: '/index/indexMain',
    children: [
      {
        path: 'indexMain',
        component: IndexMain
      },
      {
        path: 'productDetail:id',
        name: 'productDetail',
        component: ProductDetail
      },
      {
        path: 'cart',
        component: Cart
      }
    ]
  },
  {
    path: '/managePage',
    component: () => import('../views/manage/manage.vue'),
    // redirect: '/managePage/product',
    children: [
      {
        path: 'category',
        component: () => import('../views/manage/categoryManage.vue')
      },
      {
        path: 'product',
        component: () => import('../views/manage/productManage.vue')
      },
      {
        path: 'publishProduct',
        component: () => import('../views/manage/publishProduct.vue')
      },
      {
        path: 'editProductInfo:spgId:skuId',
        name: 'editProductInfo',
        component: () => import('../views/editProductInfo.vue')
      },
      {
        path: 'order',
        component: () => import('../views/manage/orderManage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index22',
    name: 'index',
    component: Index
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
