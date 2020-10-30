<template>
  <div id="app" style="padding: 100px;">
    <y-slides :selected.sync="selected" :auto-play="false">
      <y-slides-item name="1">
        <div class="box">1</div>
      </y-slides-item>
      <y-slides-item name="2">
        <div class="box">2</div>
      </y-slides-item>
      <y-slides-item name="3">
        <div class="box">3</div>
      </y-slides-item>
    </y-slides>
  </div>
</template>
<script>
import Slides from './slides'
import SlidesItem from './slides-item'
export default {
  name: 'test',
  components: {
    'y-slides': Slides,
    'y-slides-item': SlidesItem,
  },
  data() {
    return {
      selected: '1',
    }
  },
  created() {},
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 350px;
  // border: 1px solid red;
  background: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
