import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Validator from '../../src/validate'

describe('validate 存在', () => {
  it('存在', () => {
    expect(Validator).to.exist
  })
  it('测试required', () => {
    let data = {
      email: '',
    }
    let rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('测试pattern', () => {
    let data = {
      email: '',
    }
    let rules = [{ key: 'email', pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('测试required 和 pattern', () => {
    let data = {
      email: '',
    }
    let rules = [{ key: 'email', pattern: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.be.not.exist
  })
  it('测试minLength 和 pattern', () => {
    let data = {
      email: '',
    }
    let rules = [{ key: 'email', pattern: 'email', minLength: 6 }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.be.exist
  })
  it('many keys', () => {
    let data = {
      email: '',
    }
    let rules = [
      { key: 'email', pattern: 'email', minLength: 6, hasNumber: true },
    ]
    let validator = new Validator()
    let fn = () => {
      validator.validate(data, rules)
    }
    expect(fn).to.throw()
  })
  it('自己添加校验器', () => {
    let data = {
      email: 'asas',
    }
    let validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      { key: 'email', pattern: 'email', minLength: 6, hasNumber: true },
    ]
    let errors = {}
    let fn = () => {
      errors = validator.validate(data, rules)
    }
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  })
  it('全局添加新校验', () => {
    let data = {
      email: 'asas',
    }
    let validator1 = new Validator()
    let validator2 = new Validator()
    Validator.add('hasNumber', (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    })
    let rules = [
      { key: 'email', pattern: 'email', minLength: 6, hasNumber: true },
    ]
    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.not.throw()
  })
})
