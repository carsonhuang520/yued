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
  xit('icon 默认的 order 是 1', () => {
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
  xit('设置 iconPosition 可以改变 order', () => {
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