import toast from './toast'

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(toast)
  let vm = new Constructor({
    propsData,
  })
  vm.$slots.default = [message]
  vm.$mount()
  vm.$on('close', onClose)
  document.body.appendChild(vm.$el)
  return vm
}

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, props) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: props,
        onClose: () => {
          currentToast = null
        },
      })
    }
  },
}
