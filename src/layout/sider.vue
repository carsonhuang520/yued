<template>
  <div class="y-sider" :style="{ width: width }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueSider',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
}
</script>
<style lang="scss" scoped></style>
