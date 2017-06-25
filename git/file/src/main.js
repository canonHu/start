// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'
import router from './router'

import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueResource)

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
