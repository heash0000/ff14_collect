import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from "pinia";
import VueCookies from 'vue3-cookies'

const app = createApp(App);
app.use(store);
app.use(VueCookies, {
  expireTimes: "365d",
});
app.use(createPinia()).use(router).mount('#app');
// createApp(App).use(store).use(createPinia()).use(router).mount('#app')
