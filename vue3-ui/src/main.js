import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';

const app = createApp(App);
app.use(Vant);

app.mount('#app')
