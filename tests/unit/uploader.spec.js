import chai, { expect } from 'chai'
import Uploader from '@/uploader.vue'
import sinon from 'sinon'
import Vue from 'vue'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import http from '../../src/http'
chai.use(sinonChai)

describe('Uploader.vue', () => {
  it('存在', () => {
    expect(Uploader).to.exist
  })
  it('可以上传文件', (done) => {
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(function() {
        let use = wrapper.find('use').element
        // console.log(wrapper.html())
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
        options.success('{"id":"123123"}')
        setTimeout(() => {
          // console.log(wrapper.html())
          expect(wrapper.find('use').exists()).to.eq(false)
          done()
        })

        // expect(wrapper.find('use').exists()).to.eq(true)
        // done()
      }, 100)
    })
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/upload',
        method: 'post',
        parseResponse: (response) => {
          let object = JSON.parse(response)
          return `/preview/${object.id}`
        },
        fileList: [],
      },
      slots: {
        default: `<button id="x">click me</button>`,
      },
      listeners: {
        'update:fileList': (fileList) => {
          wrapper.setProps({ fileList: fileList })
        },
        uploaded: () => {
          setTimeout(() => {
            expect(wrapper.find('use').exists()).to.eq(false)
            expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
            stub.restore()
            done()
          })
        },
      },
    })
    // console.log(wrapper.html())
    wrapper.find('#x').trigger('click')
    // console.log(wrapper.html())
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    console.log(input)
    let file1 = new File(['xxxdddddx'], 'xxx.txt')
    // let file2 = new File(['yyyy'], 'yyy.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    // data.items.add(file2)
    input.files = data.files
    inputWrapper.trigger('change')
    // let use = wrapper.find('use').element
    // // console.log(wrapper.html())
    // expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
  })
})
