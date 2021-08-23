import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@vant/touch-emulator';
import {
  Swipe,
  SwipeItem,
  Image as VanImage,
  Tab,
  Tabs,
  Loading,
  List,
  Cell,
} from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(VanImage)
  .use(Tab)
  .use(Tabs)
  .use(Loading)
  .use(List)
  .use(Cell)
  .mount('#app');
