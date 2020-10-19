<template>
  <div class="y-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'YueTabs',
  props: {
    selected: {
      type: String,
      default: '',
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
    console.log(this.selected)
    this.eventBus.$emit('update:selected', this.selected)
  },
}
</script>
<style lang="scss" scoped>
.y-tabs {
}
</style>
