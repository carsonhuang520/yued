<template>
  <div class="y-cascader-item" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="leftSelected = item"
      >
        {{ item.name }}
        <y-icon class="icon" v-if="item.children" name="left"></y-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <y-cascader-item :items="rightItems" :height="height"></y-cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'YCascaderItem',
  components: {
    'y-icon': Icon,
  },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
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
  height: 100px;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    // border: 1px solid red;
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    // margin-top: -1px;
    border-left: 1px solid lighten($color: #eeeeee, $amount: 1%);
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      margin-bottom: -3px;
      transform: scale(0.8);
    }
  }
}
</style>
