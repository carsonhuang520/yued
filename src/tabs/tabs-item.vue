<template>
  <div class="y-tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      }
    },
  },
  created() {
    this.eventBus.$on('update:selected', (name, item) => {
      this.active = name === this.name
    })
  },
  methods: {
    xxx() {
      if (this.disabled) {
        return
      }
      this.eventBus.$emit('update:selected', this.name, this)
    },
  },
}
</script>
<style lang="scss" scoped>
$blue: blue;
.y-tabs-item {
  flex-shrink: 0;
  cursor: pointer;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
  }
  &.disabled {
    background: grey;
    cursor: not-allowed;
  }
}
</style>
