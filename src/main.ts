import Vue from 'vue';
import MyComponent from './MyComponent.vue';

import './assets/styles.css';

new Vue({
  render: (h) => h(MyComponent),
}).$mount('#app');
