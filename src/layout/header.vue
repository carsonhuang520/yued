<template>
  <div class="y-header" :style="{ height }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
}
</script>
<style lang="scss" scoped></style>
