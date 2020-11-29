import { createApp } from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import store from './store';

import './index.css';

createApp(App)
  .use(store)
  .use(Antd)
  .mount('#app');
