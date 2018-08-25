import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import About from './components/About';
import Show from './components/Show';

const routes = [
  { path: '/' , component: Home },
  { path: '/about' , component: About },
  { path: '/country/:name' ,props: true, component: Show }
];


const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
