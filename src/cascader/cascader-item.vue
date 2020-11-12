<template>
  <div class="y-cascader-item" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="onClickLabel(item)"
      >
        <span class="name">{{ item.name }}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <y-icon class="loading" name="loading"></y-icon>
          </template>
          <template v-else>
            <y-icon
              class="icon"
              v-if="loadData ? !item.isLeaf : item.children"
              name="right"
            ></y-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <y-cascader-item
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        :loading-item="loadingItem"
        :load-data="loadData"
        @update:selected="onUpdateSelected"
      ></y-cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
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
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => {},
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
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: #eeeeee;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      margin-bottom: -3px;
      .icon {
        transform: scale(0.8);
      }
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
