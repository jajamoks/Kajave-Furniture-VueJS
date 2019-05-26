import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleProduct from './views/Product.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/factory',
      name: 'factory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Factory.vue')
    },
    {
      path: '/products/:id',
      name: 'Products',
      props:true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Products.vue')
    },
    {
      path: '/product/:productId',
      name: 'Product',
      props:true,
      component: SingleProduct
    },
    {
      path: '/allproducts',
      name: 'AllProducts',
      component: () => import(/* webpackChunkName: "about" */ './views/AllProducts.vue')
    },
    {
      path: '/contact',
      name: 'Contact Us',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
  ]
})
