<template>
  <div class="y-table-column"></div>
</template>
<script>
export default {
  name: 'YueTableColumn',
  props: {
    text: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped></style>
