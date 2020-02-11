import Vue from 'vue';
import App from './App.vue';
import '@babel/polyfill';
import SimpleVueValidation from 'simple-vue-validator';
import router from './router';
import store from './store';
import $axios from './requests';





store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});