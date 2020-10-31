<template>
  <div class="y-sub-menu" :class="{ active }" v-click-outside="close">
    <span @click="onClick">
      <slot name="title"> </slot>
    </span>
    <div class="y-sub-menu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
export default {
  name: 'YueSubMenu',
  components: {},
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      open: false,
      // active: false,
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    },
  },
  watch: {},
  methods: {
    close() {
      this.open = false
    },
    onClick() {
      this.open = !this.open
    },
    updateNamePath() {
      // this.active = true
      this.root.namePath.unshift(this.name)
      // console.log(this.root.namePath)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
      }
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-sub-menu {
  position: relative;
  > span {
    padding: 10px 20px;
    display: block;
    // color: #303133;
    color: #909399;
  }
  &.active {
    > span {
      color: #494a4c;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid #2d8cf0;
    }
  }
  &-popover {
    background: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    min-width: 8em;
    white-space: nowrap;
    border-radius: 4px;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.8);
  }
}
.y-sub-menu .y-sub-menu .y-sub-menu-popover {
  top: 0;
  left: 100%;
}
</style>
