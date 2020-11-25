import { createApp } from 'vue';
import App from './App';

import store from './store';

import './index.css';

import 'element3/lib/theme-chalk/index.css';
import Element3 from 'element3';

createApp(App)
  .use(store)
  .use(Element3)
  .mount('#app');
