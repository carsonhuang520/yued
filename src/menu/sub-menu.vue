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
    color: #303133;
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
