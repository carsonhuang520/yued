import toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, props) {
      let Constructor = Vue.extend(toast)
      let vm = new Constructor({
        propsData: props
      })
      vm.$slots.default = [message]
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}