const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe it 是来自于 mocha 的库
// 断言是来自 chai 库
describe('Col', () => {
  // BDD 行为驱动测试 mocha引入 describe 描述 Button 有哪些行为
  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1,
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('y-col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1,
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 phone 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        phone: { span: 2, offset: 2 },
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('y-col-phone-2')).to.eq(true)
    expect(element.classList.contains('offset-phone-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 i-pad 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        iPad: { span: 2, offset: 2 },
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('y-col-i-pad-2')).to.eq(true)
    expect(element.classList.contains('offset-i-pad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 narrow-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: { span: 2, offset: 2 },
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('y-col-narrow-pc-2')).to.eq(true)
    expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: { span: 2, offset: 2 },
      },
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('y-col-pc-2')).to.eq(true)
    expect(element.classList.contains('offset-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})
