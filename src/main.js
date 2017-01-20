// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/*过滤器*/
//处理名字
Vue.filter('formatName', function (value) {
  if (value.length > 2) {
    value = value.replace(value.substring(1, value.length - 1), '*');
  }
  return value;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
