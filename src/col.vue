<template>
  <div
    class="y-col"
    :class="[span && `y-col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
}
</script>
<style lang="scss" scoped>
.y-col {
  // background: grey;
  width: 50%;
  // border: 1px solid red;
  // padding: 0 10px;
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
