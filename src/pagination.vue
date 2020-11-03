<template>
  <div class="y-pagination"></div>
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
}
</script>
<style lang="scss" scoped></style>
