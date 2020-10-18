import toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(toast)
      let vm = new Constructor()
      vm.$slots.default = [message]
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}