<template>
  <div class="box">
    <y-popover confirm>
      <span slot="content">你确定删除这条内容吗?</span>
      <y-button type="primary">点我</y-button>
    </y-popover>
  </div>
</template>
<script>
import Popover from '../../../../src/popover'
import Button from '../../../../src/button'
export default {
  components: {
    'y-popover': Popover,
    'y-button': Button,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped></style>
