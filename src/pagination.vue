<template>
  <div
    class="y-pagination"
    :class="{ hide: hideOnSinglePage && totalPage <= 1 }"
  >
    <span
      class="y-pagination-nav prev"
      :class="{ disabled: currentPage === 1 }"
      @click="onClickPage(currentPage - 1)"
    >
      <y-icon name="left"></y-icon>
    </span>
    <template v-for="(page, index) in pages">
      <template v-if="page === currentPage">
        <span :key="page" class="y-pagination-item current">{{ page }}</span>
      </template>
      <template v-else-if="page === '....'">
        <span
          title="向前5页"
          :key="`${index}...`"
          class="y-pagination-separator"
          @click="onClickPage(currentPage - 5)"
        >
          <y-icon class="dots" name="dots"></y-icon>
          <y-icon class="left" name="double-left"></y-icon>
        </span>
      </template>
      <template v-else-if="page === '...'">
        <span
          title="向后5页"
          :key="`${index}...`"
          class="y-pagination-separator"
          @click="onClickPage(currentPage + 5)"
        >
          <y-icon class="dots" name="dots"></y-icon>
          <y-icon class="right" name="double-right"></y-icon>
        </span>
      </template>
      <template v-else>
        <span
          :key="page"
          class="y-pagination-item other"
          @click="onClickPage(page)"
          >{{ page }}</span
        >
      </template>
    </template>
    <span
      class="y-pagination-nav next"
      :class="{ disabled: currentPage === totalPage }"
      @click="onClickPage(currentPage + 1)"
    >
      <y-icon name="right"></y-icon>
    </span>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: 'YuePagination',
  components: {
    'y-icon': Icon,
  },
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    pages() {
      let pages = [
        1,
        this.totalPage,
        this.currentPage,
        this.currentPage - 1,
        this.currentPage - 2,
        this.currentPage + 1,
        this.currentPage + 2,
      ].filter((n) => n >= 1 && n <= this.totalPage)
      let u = unique(pages.sort((a, b) => a - b))
      let u2 = u.reduce((prev, current, index) => {
        prev.push(current)
        if (u[index + 1] !== undefined && u[index + 1] - u[index] > 1) {
          if (u[index] === 1) {
            prev.push('....')
          } else {
            prev.push('...')
          }
        }
        return prev
      }, [])
      return u2
    },
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    },
  },
}
function unique(array) {
  return [...new Set(array)]
}
</script>
<style lang="scss" scoped>
.y-pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &.hide {
    display: none;
  }
  &-separator {
    border: none;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    font-size: 12px;
    cursor: pointer;
    .right {
      display: none;
    }
    .left {
      display: none;
    }
    &:hover {
      fill: #2d8cf0;
      .dots {
        display: none;
      }
      .right {
        display: inline;
      }
      .left {
        display: inline;
      }
    }
  }
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 0 4px;
    font-size: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    min-width: 20px;
    height: 20px;
    cursor: pointer;
    &.current,
    &:hover {
      color: #2d8cf0;
      border-color: #2d8cf0;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background: #e1e1e1;
    font-size: 14px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      svg {
        fill: darken(#e1e1e1, 30%);
      }
    }
  }
}
</style>
