import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/monitor",
    name: "monitor",
    component: () => import("../views/monitor.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/control",
    name: "control",
    component: () => import("../views/Control.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    name: "manage",
    component: () => import("../views/Manage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/',
    redirect:'/index'
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  let loginToken = localStorage.getItem('login') || ""
  if (to.path != "/login" && !loginToken) {
    next({ name:"login"})
  } else {
  next()
  }

});
 // 捕获路由错误
router.beforeResolve((to, from, next) => { 
  if (to.matched.length === 0) {
    // 如果路由地址没有匹配项
    next({ name: "index" }); // 手动跳转到 404 页面
  } else {
    next(); // 继续路由导航
  }
});
export default router;
