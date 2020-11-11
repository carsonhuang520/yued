<template>
  <div class="y-footer" :style="{ height }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
}
</script>
<style lang="scss" scoped></style>
