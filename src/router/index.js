import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: "/",
        redirect: "/index",
    },
    {
        path: '/index',
        name:'index',
        component:() =>
        import ('../views/Index.vue')
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

router.beforeEach((to, from,next) => {
    // const testRouteName = ['home', 'index']
    let  islogin
    localStorage.getItem('login')?islogin=true:islogin=false
    if (to.name !== 'login' && !islogin) next({ name: 'login' })
    else next()
  })
export default router