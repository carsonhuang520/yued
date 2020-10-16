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
  computed: {
    colClasses() {
      let { span, offset, phone, iPad, narrowPc, pc, widePc } = this
      let phoneClass = []
      return [
        span && `y-col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`y-col-phone-${phone.span}`] : []),
        ...(iPad ? [`y-col-i-pad-${iPad.span}`] : []),
        ...(narrowPc ? [`y-col-narrow-pc-${narrowPc.span}`] : []),
        ...(pc ? [`y-col-pc-${pc.span}`] : []),
        ...(widePc ? [`y-col-wide-pc-${widePc.span}`] : []),
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
  @media (max-width: 576px) {
    $class-prefix: y-col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: y-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: y-col-i-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: y-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: y-col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: y-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: y-col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: y-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: y-col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: y-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
