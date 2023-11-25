import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 国际化指定中文
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

// app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
