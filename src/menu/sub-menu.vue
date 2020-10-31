<template>
  <div class="y-sub-menu" :class="{ active, vertical }" v-click-outside="close">
    <span class="y-sub-menu-label" @click="onClick">
      <slot name="title"></slot>
      <span class="y-sub-menu-icon" :class="{ open, vertical }">
        <y-icon name="right"></y-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div class="y-sub-menu-popover" v-show="open" :class="{ vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="y-sub-menu-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
import Icon from '../icon'
export default {
  name: 'YueSubMenu',
  components: {
    'y-icon': Icon,
  },
  inject: ['root', 'vertical'],
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
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    },
  },
  watch: {},
  methods: {
    enter(el, done) {
      let { height } = el.getBoundingClientRect()
      // console.log(height)
      el.style.height = 0 // 1
      el.getBoundingClientRect()
      el.style.height = `${height}px` // 2  1 和 2 会发生合并，所以并不会产生从 0 到 height 的动画，所以中间加入一句获取高度的操作
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
      // done() // 执行 done 会立即 display: none 所以离开的动画不起作用
    },
    afterLeave(el) {
      el.style.height = 'auto'
    },
    close() {
      this.open = false
    },
    onClick() {
      this.open = !this.open
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
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
  &-label {
    padding: 10px 20px;
    // display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // color: #303133;
    color: #909399;
  }
  &.active {
    > span {
      color: #494a4c;
    }
    &:not(.vertical) {
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
  &-popover {
    transition: height 250ms;
    background: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    min-width: 8em;
    white-space: nowrap;
    border-radius: 4px;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.8);
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
      overflow: hidden;
    }
  }
  &-icon {
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 4px;
    transform: rotate(90deg);
    &.open {
      transform: rotate(270deg);
    }
  }
}
.y-sub-menu .y-sub-menu {
  &.active {
    &::after {
      display: none;
    }
  }
  .y-sub-menu-popover {
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
  .y-sub-menu-label {
    padding: 10px 10px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .y-sub-menu-icon {
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 1em;
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }
    &.open {
      transform: rotate(180deg);
    }
    svg {
      fill: #909399;
    }
  }
}
</style>
