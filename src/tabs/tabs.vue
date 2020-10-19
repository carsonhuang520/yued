<template>
  <div class="y-tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueTabs',
  prop: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.y-tabs {
}
</style>
