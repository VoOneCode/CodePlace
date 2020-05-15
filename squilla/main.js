import Vue from 'vue';
import App from './App.vue';
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

import {router} from './routes.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
