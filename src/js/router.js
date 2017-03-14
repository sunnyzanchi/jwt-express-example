import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from 'Pages/Home.vue';
import Login from 'Pages/Login.vue';
import Create from 'Pages/Create.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/create', component: Create},
  {path: '/login', component: Login}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
