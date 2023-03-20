import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    }
]

const router = createRouter({
    /* history: createWebHistory(process.env.BASE_URL), */
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router