<template>
  <div class="y-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueContent',
}
</script>
<style lang="scss" scoped>
.y-content {
  flex-grow: 1;
}
</style>
