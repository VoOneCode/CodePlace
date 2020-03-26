import Vue from 'vue'
import App from './App.vue'

import {router} from './routes.js';
import {store} from './store/';
import VueScrollTo from 'vue-scrollto';
import vBlur from 'v-blur';

Vue.use(VueScrollTo);
Vue.use(vBlur)



new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
