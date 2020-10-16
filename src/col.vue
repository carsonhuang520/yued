<template>
  <div class="y-col" :class="[`y-col-${span}`]">
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
  },
}
</script>
<style lang="scss" scoped>
.y-col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  $class-prefix: y-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
