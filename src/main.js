import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import ElementPlus from 'element-plus'
import './assets/css/common.css'
import 'element-plus/dist/index.css'
//引用插件
import "lib-flexible/flexible"



createApp(App).use(store).use(router).use(dataV).use(ElementPlus).mount('#app')