<template>
  <div id="app" style="padding: 100px;">
    <!-- <y-slides :selected.sync="selected" :auto-play="false">
      <y-slides-item name="1">
        <div class="box">1</div>
      </y-slides-item>
      <y-slides-item name="2">
        <div class="box">2</div>
      </y-slides-item>
      <y-slides-item name="3">
        <div class="box">3</div>
      </y-slides-item>
    </y-slides> -->
    <div ref="wrapper" class="wrapper">
      <div class="box1">1</div>
      <div class="box2">2</div>
      <div class="box3">3</div>
    </div>
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
  mounted() {
    setTimeout(() => {
      this.$refs.wrapper.children[0].classList = 'box2'
      this.$refs.wrapper.children[1].classList = 'box1'
    }, 3000)
    console.log()
  },
}
</script>
<style lang="scss" scoped>
* {
  // box-sizing: border-box;
  perspective: 2000px;
}
.wrapper {
  border: 1px solid red;
  // display: inline-block;
  width: 1000px;
  height: 300px;
  position: relative;
  overflow: hidden;
  > div {
    position: absolute;
    top: 0;
    width: 500px;
    height: 300px;
    background: #506b9e;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transition: all 3s;
  }
  .box1 {
    // transform-origin: 0 100%;
    transform: translate3d(-100px, 0, -100px) scale(0.9);
    // transform: translate3d(-550px, 0, -100px);
    z-index: 19;
  }
  .box2 {
    transform: translateX(250px);
    // transform: translate3d(-50%, 0, 0);
    z-index: 20;
  }
  .box3 {
    // transform-origin: 100% 100%;
    transform: translate3d(600px, 0, -100px) scale(0.9);
    // transform: translate3d(50px, 0, -100px);
    z-index: 18;
  }
}
</style>
