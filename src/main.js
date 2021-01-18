import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavlib from 'datavlib'
import './style/base.css'

createApp(App)
  .use(router)
  .use(store)
  .use(datavlib)
  .mount('#app')
