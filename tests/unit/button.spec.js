import chai, { expect } from 'chai'
import Button from '@/button.vue'
import sinon from 'sinon'
import Vue from 'vue'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)

describe('Button.vue', () => {
  it('存在', () => {
    expect(Button).to.exist
  })
  it('可以设置icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      },
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-settings')
  })
  it('可以设置loading', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true,
      },
    })
    const vm = wrapper.vm
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
      },
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
  })
  it('设置 iconPosition 可以改变 order', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
        iconPosition: 'right',
      },
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
  })
  it('点击 button 触发 click 事件', () => {
    // const Constructor = Vue.extend(Button)
    // const vm = new Constructor({
    //   propsData: {
    //     icon: 'settings',
    //   },
    // }).$mount()
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      },
    })
    const vm = wrapper.vm
    const callback = sinon.fake() // 相当于之前的 spy
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
