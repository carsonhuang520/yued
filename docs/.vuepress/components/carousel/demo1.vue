<template>
  <div style="width: 100%;">
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
import Slides from '../../../../src/slides'
import SlidesItem from '../../../../src/slides-item'
export default {
  components: {
    'y-slides': Slides,
    'y-slides-item': SlidesItem,
  },
  data() {
    return {
      selected: '1',
    }
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 150px;
  height: 350px;
  background: #506b9e;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
