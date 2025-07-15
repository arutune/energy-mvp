import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './styles/main.less'

const app = createApp(App);
app.use(Toast, {
  position: POSITION.TOP_CENTER,
  timeout: 3000,
  transition: 'Vue-Toastification__bounce',
  toastClassName: 'custom-toast',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
});
app.mount('#app');