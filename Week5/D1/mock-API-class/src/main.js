import './assets/main.css'

import { makeServer } from './server.js'

import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const app = createApp(App);

app.use(createPinia());

app.mount("#app")

/*
createApp(App).use(createPinia()).mount('#app')
*/