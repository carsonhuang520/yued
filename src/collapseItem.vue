<template>
  <div class="y-collapse-item">
    <div class="title" @click="toggle">
      {{ title }}<y-icon name="right" :class="{ active: open }"></y-icon>
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: 'YueCollapseItem',
  components: {
    'y-icon': Icon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  inject: ['eventBus'],
  data() {
    return {
      open: false,
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
    close() {
      this.open = false
    },
    show() {
      this.open = true
    },
  },
}
</script>
<style lang="scss" scoped>
.y-collapse-item {
  > .title {
    border: 1px solid #dddddd;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    > svg {
      transition: transform 250ms linear;
      &.active {
        transform: rotate(90deg);
      }
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    margin-bottom: -1px;
    > .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
