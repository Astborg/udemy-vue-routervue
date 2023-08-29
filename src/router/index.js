import {createRouter, createWebHistory} from 'vue-router'
import Homeview from '../views/Home.vue'
import Aboutview from '../views/About.vue'
import Carview from '../views/Car.vue'
import Contactview from '../views/Contact.vue'
import NotFoundview from '../views/404.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homeview,
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            component: Aboutview,
        },
        {
            path: '/cars/:id',
            name: 'car',
            component: Carview, 
            children:[
                {
                    path: 'contact',
                    component: Contactview
                }
            ]
        },
        {
            path: '/:catchall(.*)*',
            name: 'Not found',
            component: NotFoundview
        }
    ]
})

export default router