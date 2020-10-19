<template>
  <div class="y-tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueTabsItem',
  props: {
    disabled: {
      type: String,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.y-tabs-item {
}
</style>
