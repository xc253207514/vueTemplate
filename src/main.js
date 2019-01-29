// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import $ from 'jquery'
import './config/rem.js'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
Vue.use(WeVue)

Vue.config.productionTip = false;

import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


// 构建路由
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  // template: '<App/>'
})