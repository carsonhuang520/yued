<template>
  <div class="y-menu-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YueMenuItem',
  components: {},
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
      this.$emit('add:selected', this.name)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-menu-item {
  padding: 10px 20px;
  &.selected {
    background: red;
  }
}
</style>
