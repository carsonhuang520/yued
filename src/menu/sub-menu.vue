<template>
  <div class="y-sub-menu">
    <span>
      <slot name="title"> </slot>
    </span>
    <div class="y-sub-menu-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YueSubMenu',
  components: {},

  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-sub-menu {
  padding: 10px 20px;
  position: relative;
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
</style>
