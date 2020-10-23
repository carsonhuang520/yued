<template>
  <div class="y-tabs-item" @click="xxx" :class="classes">
    <y-icon v-if="icon" :name="icon" style="margin-right: 4px;"></y-icon>
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
      type: 'default',
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
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
        card: this.type === 'card',
      }
    },
  },
  created() {
    this.eventBus.$on('type', (item) => {
      this.type = item
    })
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
$blue: #2d8cf0;
.y-tabs-item {
  flex-shrink: 0;
  cursor: pointer;
  padding: 0 1em;
  // height: 100%;
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 6px;
  }
  &.disabled {
    color: #cccccc;
    // background: #f1f1f1;
    cursor: not-allowed;
  }
  &.card {
    background: #f8f8f9;
    border: 1px solid #dcdee2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: none;
    &.active {
      border-color: $blue;
      margin-bottom: -1px;
      background: #ffffff;
    }
  }
  &.active {
    color: $blue;
  }
}
</style>
