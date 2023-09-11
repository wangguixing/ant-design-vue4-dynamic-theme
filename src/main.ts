/*
 * @Author: wangguixing
 * @Date: 2023-09-08 18:10:07
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-09-11 10:08:02
 * @FilePath: \src\main.ts
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'

import './app.css'

const app = createApp(App)

app.use(createPinia())
app.use(Antd)

app.mount('#app')
