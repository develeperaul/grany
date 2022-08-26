import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/app.scss';
import InlineSvg from 'vue-inline-svg';
import vClickOutside from "click-outside-vue3"

const app = createApp(App);
app.component('InlineSvg', InlineSvg);
app.component('AppLink', require('@/core/AppLink.vue').default);
app.component('AppButton', require('@/core/AppButton.vue').default);
app.component('AppInput', require('@/core/AppInput.vue').default);
app.component('Header', require('@/components/Header.vue').default);
app.component('Footer', require('@/components/Footer.vue').default);
app.component('Carousel', require('@/components/Carousel.vue').default);
app.use(vClickOutside);
app.use(store).use(router).mount('#app');
