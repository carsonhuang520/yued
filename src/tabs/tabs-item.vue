<template>
  <div class="y-tabs-item" @click="xxx" :class="classes">
    <y-icon v-if="icon" :name="icon" style="margin-right: 4px;"></y-icon>
    <slot></slot>
  </div>
</template>
<script>
import Icon from '../icon'
export default {
  name: 'YueTabsItem',
  components: {
    'y-icon': Icon,
  },
  inject: ['eventBus'],
  data() {
    return {
      active: false,
      type: 'default',
      direction: 'horizontal',
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
        [`tabs-item-vertical`]: this.direction === 'vertical',
      }
    },
  },
  created() {
    this.eventBus.$on('direction', (item) => {
      this.direction = item
    })
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
    > svg {
      fill: $blue;
    }
    color: $blue;
  }
  &.tabs-item-vertical {
    display: inline-block;
    margin-left: 0;
    padding: 1em 1em;
    &.card {
      background: #f8f8f9;
      border: 1px solid #dcdee2;
      border-radius: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: none;
      &.active {
        border-color: $blue;
        margin-right: -1px;
        background: #ffffff;
      }
    }
    &:not(:first-child) {
      margin-top: 6px;
    }
  }
}
</style>
