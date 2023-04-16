import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import './assets/css/common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'default-passive-events'
import mitt from 'mitt'



//引用插件
// import "lib-flexible/flexible"


const app = createApp(App)
app.config.globalProperties.$EventBus = new mitt()

app.use(store).use(router).use(ElementPlus).mount('#app')

// vue3.x的全局实例，要挂载在config.globalProperties上
