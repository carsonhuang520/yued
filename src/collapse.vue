<template>
  <div class="y-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueCollapse',
}
</script>
<style lang="scss" scoped>
.y-collapse {
  border: 1px solid #dddddd;
  border-radius: 4px;
}
</style>
