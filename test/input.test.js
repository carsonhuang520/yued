const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe it 是来自于 mocha 的库
// 断言是来自 chai 库
describe('Input', () => {
  // BDD 行为驱动测试 mocha引入 describe 描述 Input 有哪些行为
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  // 测试 input 的属性
  describe('props', () => {
    it('设置 value.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234',
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })
    it('设置 disabled.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('设置 readonly.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true) // 注意这里的 readOnly, Only的o小写会测试通不过
      vm.$destroy()
    })
    it('设置 error.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: 'wrong',
        },
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings') // 测试错误图标
      const errorMessage = vm.$el.querySelector('.message-error')
      expect(errorMessage.innerText).to.equal('wrong') // 测试错误提示
      vm.$destroy()
    })
  })
  // 测试 input 的事件
  describe('events', () => {
    it('测试 change 事件.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      let event = new Event('change') // 自己创建一个 change 事件
      Object.defineProperty(event, 'target', {
        value: { value: 'hi' },
        enumerable: true,
      })
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi') // 回调被执行，传入的参数为 event
      vm.$destroy()
    })
    it('测试 input 事件.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      let event = new Event('input') // 自己创建一个 input 事件
      Object.defineProperty(event, 'target', {
        value: { value: 'hi' },
        enumerable: true,
      })
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi') // 回调被执行，传入的参数为 event
      vm.$destroy()
    })
    it('测试 focus 事件.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus', callback)
      let event = new Event('focus') // 自己创建一个 focus 事件
      Object.defineProperty(event, 'target', {
        value: { value: 'hi' },
        enumerable: true,
      })
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi') // 回调被执行，传入的参数为 event
      vm.$destroy()
    })
    it('测试 blur 事件.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur', callback)
      let event = new Event('blur') // 自己创建一个 blur 事件
      Object.defineProperty(event, 'target', {
        value: { value: 'hi' },
        enumerable: true,
      })
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi') // 回调被执行，传入的参数为 event
      vm.$destroy()
    })
  })
})
