<template>
  <div class="y-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <y-cascader-item
        :items="source"
        class="popover"
        :height="popoverHeight"
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
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-cascader {
  position: relative;
  .trigger {
    width: 100px;
    height: 32px;
    border: 1px solid red;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    // border: 1px solid green;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    // height: 200px;
  }
}
</style>
