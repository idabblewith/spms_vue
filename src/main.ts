import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/main.css'
import '@/assets/fonts/sass/style.scss'

import { OhVueIcon, addIcons } from "oh-vue-icons";
// import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
// addIcons(FaFlag, RiZhihuFill);

import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);



const app = createApp(App)


app.use(createPinia())
app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
