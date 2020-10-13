const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe it 是来自于 mocha 的库
// 断言是来自 chai 库
describe('Button', () => {
  // BDD 行为驱动测试 mocha引入 describe 描述 Button 有哪些行为
  it('存在.', () => {
    expect(Button).to.be.ok
    expect([1, 2]).to.deep.equal([1, 2]) // 数组判断需要加 deep
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    vm.$destroy()
  })
  it('可以设置loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true,
      },
    }).$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    }).$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    // console.log(useElement);
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right',
      },
    }).$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    }).$mount()
    const callback = sinon.fake() // 相当于之前的 spy
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
