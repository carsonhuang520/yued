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
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    if (this.accordion) {
      return {
        eventBus: this.eventBus,
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.y-collapse {
  border: 1px solid #dddddd;
  border-radius: 4px;
}
</style>
