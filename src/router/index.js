import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active-link',
    history: createWebHistory(),
    routes
})

export default router