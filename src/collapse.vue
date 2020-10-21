<template>
  <div class="y-collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'YueCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  },
}
</script>
<style lang="scss" scoped>
.y-collapse {
  border: 1px solid #dddddd;
  border-radius: 4px;
}
</style>
