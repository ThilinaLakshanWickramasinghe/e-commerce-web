/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './screens/home-src.vue'
import Cart from './screens/cart-src.vue'
import Item from './screens/item-src.vue'

const routes = [ 
    {
        name: 'Home',
        path: '/',
        component: Home
    },

    {
        name: 'Cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'Item',
        path: '/item/:id',
        component: Item
    }   

]

const router = createRouter({
    history: createWebHistory(),
    routes,
   scrollBehavior (to, from, savedPosition) {
       return { top: 0 };
     }
})

export default router;

