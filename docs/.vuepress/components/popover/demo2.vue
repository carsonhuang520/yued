<template>
  <div class="box">
    <y-popover class="top">
      <template slot="content">
        <div>我在这</div>
      </template>
      <y-button>上边</y-button>
    </y-popover>
    <y-popover class="bottom" position="bottom">
      <template slot="content">
        <div>我在这</div>
      </template>
      <y-button>下边</y-button>
    </y-popover>
    <y-popover class="left" position="left">
      <template slot="content">
        <div>我在这</div>
      </template>
      <y-button>左边</y-button>
    </y-popover>
    <y-popover class="right" position="right">
      <template slot="content">
        <div>我在这</div>
      </template>
      <y-button>右边</y-button>
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
<style lang="scss" scoped>
.box {
  margin: 0 auto;
  width: 280px;
  height: 100px;
  position: relative;
  .top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .left {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}
</style>
