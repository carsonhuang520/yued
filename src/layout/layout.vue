<template>
  <div class="y-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'YueSider') {
        this.layoutClass.hasSider = true
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.y-layout {
  flex-grow: 1;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
