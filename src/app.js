import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Sider from './layout/sider'
import Footer from './layout/footer'
import plugin from './plugin'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row', Row)
Vue.component('y-col', Col)
Vue.component('y-layout', Layout)
Vue.component('y-header', Header)
Vue.component('y-content', Content)
Vue.component('y-sider', Sider)
Vue.component('y-footer', Footer)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hello',
  },
  created() {
  },
  methods: {
    showToast() {
      this.$toast('hello world')
    },
  },
})
