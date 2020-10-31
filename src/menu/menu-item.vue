<template>
  <div class="y-menu-item" :class="{ selected, vertical }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YueMenuItem',
  components: {},
  inject: ['root', 'vertical'],
  data() {
    return {
      selected: false,
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {},
  watch: {},
  methods: {
    onClick() {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      // console.log(this.$parent.$options.name)
      this.$emit('add:selected', this.name)
    },
  },
  created() {
    this.root.addItem(this)
    // console.log(this.root)
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-menu-item {
  padding: 10px 20px;
  position: relative;
  color: #909399;
  &:not(.vertical) {
    &.selected {
      color: #494a4c;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid #2d8cf0;
      }
    }
  }
  &.vertical {
    &.selected {
      color: #409eff;
    }
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.y-sub-menu .y-menu-item:not(.vertical) {
  color: #95989d;
  &.selected {
    color: #494a4c;
    // background: #dddddd;
    &::after {
      display: none;
    }
  }
}
</style>
