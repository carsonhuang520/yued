<template>
  <div class="y-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <y-cascader-item :items="source"></y-cascader-item>
    </div>
  </div>
</template>

<script>
import YCascaderItem from './cascader-item'
export default {
  name: 'YueCascader',
  components: {
    YCascaderItem,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: false,
      selectedItem1: null,
      selectedItem2: null,
    }
  },
  computed: {
    level2Item() {
      if (this.selectedItem1) {
        return this.selectedItem1.children
      } else {
        return []
      }
    },
    level3Item() {
      if (this.selectedItem2) {
        return this.selectedItem2.children
      } else {
        return []
      }
    },
  },
  watch: {},
  methods: {
    hanleClick(item1) {
      this.selectedItem1 = item1
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-cascader {
  .trigger {
    width: 100px;
    height: 32px;
    border: 1px solid red;
  }
  .popover {
    border: 1px solid green;
    display: flex;
  }
}
</style>
