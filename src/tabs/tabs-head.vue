<template>
  <div class="y-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueTabsHead',
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.y-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto; //让actions到最右边
  }
}
</style>
