import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)

new Vue({
  el: '#app',
  data: {
    loading: false,
  },
})
