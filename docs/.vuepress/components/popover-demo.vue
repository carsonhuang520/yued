<template>
  <div>
    <h4>鼠标悬浮出现</h4>
    <div class="box">
      <y-popover class="top" trigger="hover">
        <template slot="content">
          <div>我在这</div>
        </template>
        <y-button>上边</y-button>
      </y-popover>
      <y-popover class="bottom" trigger="hover" position="bottom">
        <template slot="content">
          <div>我在这</div>
        </template>
        <y-button>下边</y-button>
      </y-popover>
      <y-popover class="left" trigger="hover" position="left">
        <template slot="content">
          <div>我在这</div>
        </template>
        <y-button>左边</y-button>
      </y-popover>
      <y-popover class="right" trigger="hover" position="right">
        <template slot="content">
          <div>我在这</div>
        </template>
        <y-button>右边</y-button>
      </y-popover>
    </div>
    <pre><code>{{ content1 }}</code></pre>
    <h4>鼠标点击出现</h4>
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
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components: {
    'y-popover': Popover,
    'y-button': Button,
  },
  data() {
    return {
      content1: `<y-popover trigger="hover">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>上边</y-button>
</y-popover>
<y-popover trigger="hover" position="bottom">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>下边</y-button>
</y-popover>
<y-popover trigger="hover" position="left">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>左边</y-button>
</y-popover>
<y-popover trigger="hover" position="right">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>右边</y-button>
</y-popover>`,
content2: `<y-popover>
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>上边</y-button>
</y-popover>
<y-popover position="bottom">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>下边</y-button>
</y-popover>
<y-popover position="left">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>左边</y-button>
</y-popover>
<y-popover position="right">
  <template slot="content">
    <div>我在这</div>
  </template>
  <y-button>右边</y-button>
</y-popover>`,
    }
  },
}
</script>
<style lang="scss" scoped>
.box {
  margin: 0 auto;
  width: 280px;
  height: 280px;
  // border: 1px solid red;
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
