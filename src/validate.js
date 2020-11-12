class Validator {
  constructor() {}
  static add(name, fn) {
    Validator.prototype[name] = fn
  }
  validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
      let value = data[rule.key]
      if (rule.required) {
        let error = this.required(value)
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key].required = error
          return
        }
      }
      let validators = Object.keys(rule).filter(
        (item) => item !== 'key' && item !== 'required'
      )
      validators.forEach((item) => {
        if (this[item]) {
          let error = this[item](value, rule[item])
          if (error) {
            ensureObject(errors, rule.key)
            errors[rule.key][item] = error
          }
        } else {
          throw `不存在的校验器，${item}`
        }
      })
    })
    return errors
  }
  required = (value) => {
    if (!value && value !== 0) {
      return '必填'
    }
  }
  pattern = (value, pattern) => {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }
  minLength = (value, minLength) => {
    if (value.length < minLength) {
      return '密码太短'
    }
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}

export default Validator
