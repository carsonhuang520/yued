<template>
  <div class="y-pagination">
    <span
      v-for="page in pages"
      :key="page"
      class="y-pagination-item"
      :class="{ active: page === currentPage, separator: page === '...' }"
      >{{ page }}</span
    >
  </div>
</template>
<script>
export default {
  name: 'YuePagination',
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
    let pages = [
      1,
      this.totalPage,
      this.currentPage,
      this.currentPage - 1,
      this.currentPage - 2,
      this.currentPage + 1,
      this.currentPage + 2,
    ]
    // for (let i = 1; i <= this.totalPage; i++) {
    //   pages.push(i)
    // }
    let u = unique(pages.sort((a, b) => a - b))
    let u2 = u.reduce((prev, current, index) => {
      prev.push(current)
      if (u[index + 1] !== undefined && u[index + 1] - u[index] > 1) {
        prev.push('...')
      }
      return prev
    }, [])
    return {
      pages: u2,
    }
  },
}
function unique(array) {
  return [...new Set(array)]
}
</script>
<style lang="scss" scoped>
.y-pagination {
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
    &.active,
    &:hover {
      border-color: #2d8cf0;
    }
    &.active {
      cursor: default;
    }
    &.separator {
      border: none;
    }
  }
}
</style>
