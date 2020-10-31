import Vue from 'vue'
import Demo from './demo.vue'
import Test from './test.vue'
import TestDemo from './demo/demo'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Test),
}).$mount('#app')
