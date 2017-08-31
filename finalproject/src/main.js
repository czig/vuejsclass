import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import {routes} from './routes.js'
import {store} from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.filter('currency',function(value) {
    return '$' + value;
});
Vue.http.options.root = 'https://vuejs-http-33a29.firebaseio.com/';


const router = new VueRouter({
    routes: routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
