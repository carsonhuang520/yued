<template>
  <div class="y-col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueCol',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClasses() {
      let { span, offset } = this
      return [span && `y-col-${span}`, offset && `offset-${offset}`]
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
}
</style>
