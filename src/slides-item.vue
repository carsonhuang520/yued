<template>
  <transition name="slide">
    <div class="y-slides-item" v-if="visible" :class="{ reverse }">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'YueSlidesItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
    }
  },
  computed: {
    visible() {
      return this.selected === this.name
    },
  },
}
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%) scale(0.5);
  opacity: 0;
}
.slide-enter.reverse {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to.reverse {
  transform: translateX(100%) scale(0.5);
  opacity: 0;
}
.y-slides-item {
}
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
