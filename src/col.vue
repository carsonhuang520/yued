<template>
  <div class="y-col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach((item) => {
    if (!['span', 'offset'].includes(item)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'YueCol',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      type: Object,
      validator,
    },
    iPad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods: {
    createClass(obj, str = '') {
      if (!obj) {
        return []
      }
      let res = []
      if (obj.span) {
        res.push(`y-col-${str}${obj.span}`)
      }
      if (obj.offset) {
        res.push(`offset-${str}${obj.offset}`)
      }
      return res
    },
  },
  computed: {
    colClasses() {
      let { span, offset, phone, iPad, narrowPc, pc } = this
      return [
        ...this.createClass({ span, offset }),
        ...this.createClass(phone, 'phone-'),
        ...this.createClass(iPad, 'i-pad-'),
        ...this.createClass(narrowPc, 'narrow-pc-'),
        ...this.createClass(pc, 'pc-'),
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.y-col {
  width: 50%;
  $class-prefix: y-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: y-col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: y-col-i-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-i-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: y-col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: y-col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
