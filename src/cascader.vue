<template>
  <div class="y-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || '&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <y-cascader-item
        :items="source"
        class="popover"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></y-cascader-item>
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
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/')
    },
  },
  watch: {},
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-cascader {
  position: relative;
  .trigger {
    display: flex;
    align-items: center;
    width: 200px;
    height: 32px;
    padding: 0 1em;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: #ffffff;
    // border: 1px solid green;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    // height: 200px;
  }
}
</style>
