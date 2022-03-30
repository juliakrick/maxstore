import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainPart from '../components/MainPart.vue'
// import ProductionItem from '../views/ProductionItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Main" */ '../components/MainPart.vue') 
  },
  {
    path: '/production',
    name: 'ProductionItem',
    component: () => import(/* webpackChunkName: "ProductionItem" */ '../views/ProductionItem.vue') 
   },
   {
    path: '/catalog',
    name: 'CatalogItem',
    component: () => import(/* webpackChunkName: "ContactItem" */ '../views/CatalogItem.vue')  
  },
    {
      path: '/contact',
      name: 'ContactItem',
      component: () => import(/* webpackChunkName: "ContactItem" */ '../views/ContactItem.vue')  
    }


  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
