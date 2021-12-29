import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import usePrime from "./plugins/prime";
import "./styles/index.css";
const app = usePrime(createApp(App).use(store).use(router))
app.mount('#app')
