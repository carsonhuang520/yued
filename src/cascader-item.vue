<template>
  <div class="y-cascader-item">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="leftSelected = item"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <y-cascader-item :items="rightItems"></y-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YCascaderItem',
  components: {},
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-cascader-item {
  display: flex;
  // margin: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    // margin-top: -1px;
  }
}
</style>
