<template>
  <div class="y-tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    },
  },
  created() {
    this.eventBus.$on('update:selected', (name, item) => {
      this.active = name === this.name
    })
  },
}
</script>
<style lang="scss" scoped>
.y-tabs-pane {
  padding: 1em;
}
</style>
