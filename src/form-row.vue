<template>
  <div class="row">
    <label>{{ label }}</label>
    <div class="controls">
      <slot></slot>
      <div class="error">
        {{ error && Object.values(error)[0] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-row',
  props: {
    label: {
      type: String,
      required: true,
    },
    error: {
      type: Object,
    },
  },
}
</script>
<style scoped lang="scss">
.row {
  padding: 8px 0;
  display: flex;
  align-items: center;
  margin: 10px 0;
  .error {
    position: absolute;
    color: red;
  }
}
label {
  margin-right: 1em;
}
</style>
