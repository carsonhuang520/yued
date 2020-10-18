<template>
  <div class="y-toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueToast',
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$height: 40px;
.y-toast {
  font-size: $font-size;
  height: 40px;
  line-height: 1.8;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>
