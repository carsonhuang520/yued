<template>
  <div class="y-sub-menu">
    <span @click="onClick">
      <slot name="title"> </slot>
    </span>
    <div class="y-sub-menu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YueSubMenu',
  components: {},

  data() {
    return {
      open: false,
    }
  },
  computed: {},
  watch: {},
  methods: {
    onClick() {
      this.open = !this.open
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
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
.y-sub-menu .y-sub-menu .y-sub-menu-popover {
  top: 0;
  left: 100%;
}
</style>
