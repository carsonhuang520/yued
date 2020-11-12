import Validate from './validate'
export default {
  data() {
    return {
      errors: {},
      validator: new Validate(),
    }
  },
  methods: {
    validate(formData) {
      const rules = this.rules
      const v = this.validator
      v.maxLength = (value, maxLength) => {
        if (value.length > maxLength) {
          return '密码太长'
        }
      }
      this.errors = v.validate(formData, rules)
    },
  },
}
