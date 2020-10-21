<template>
  <div class="y-collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueCollapseItem',
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
      this.eventBus.$on('update:selected', (name) => {
        if (name !== this.name) {
          this.close()
        } else {
          this.show()
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
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
    padding: 0 8px;
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
