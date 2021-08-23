import { createWebHistory, createRouter } from "vue-router";

//routes

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')

    },
    {path: '/:pathMatch(.*)*', redirect: '/'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;