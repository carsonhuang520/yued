<template>
  <div class="y-cascader-item" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="onClickLabel(item)"
      >
        {{ item.name }}
        <y-icon class="icon" v-if="item.children" name="left"></y-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <y-cascader-item
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></y-cascader-item>
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
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let select = this.items.filter(
          (item) => item.name === this.selected[this.level].name
        )[0]
        if (select && select.children && select.children.length > 0) {
          return select.children
        } else {
          return null
        }
      }
    },
  },
  watch: {},
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
      // this.$set(this.selected, this.level, item)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
  },
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
    overflow: auto;
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
