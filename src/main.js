import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/app.scss';

const app = createApp(App);

require('./registr-components').default(app);
require('./registr-plugins').default(app);
require('./registr-error-handler').default(app);
require('./registr-validators').default();

app.use(store).use(router).mount('#app');
