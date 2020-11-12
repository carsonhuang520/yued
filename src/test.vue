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
    <div
      ref="wrapper"
      class="wrapper"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div ref="window" class="window">
        <div class="box2">1</div>
        <div class="box1">3</div>
        <div class="box3">2</div>
      </div>

      <div class="y-slides-left" v-if="arrowVisible">
        <span @click="prevPic"
          ><y-icon name="left" fill="#ffffff" style="font-size: 24px;"></y-icon
        ></span>
      </div>
      <div class="y-slides-dots">
        <span
          v-for="n in classes.length"
          :key="n"
          :data-index="n - 1"
          :class="{ active: selectedIndex === n - 1 }"
          @click="onClickNumber(n - 1)"
        ></span>
        <!-- <span @click="onClickNext">&gt;</span> -->
      </div>
      <div class="y-slides-right" v-if="arrowVisible">
        <span @click="nextPic"
          ><y-icon name="right" fill="#ffffff" style="font-size: 24px;"></y-icon
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'
export default {
  name: 'test',
  components: {
    'y-icon': Icon,
    'y-slides': Slides,
    'y-slides-item': SlidesItem,
  },
  data() {
    return {
      selectedIndex: 0,
      arrowVisible: false,
      selected: '1',
      classes: ['box1', 'box2', 'box3'],
    }
  },
  created() {},
  mounted() {
    // setInterval(() => {
    //   this.prevPic()
    // }, 5000)

    // setTimeout(() => {
    //   this.$refs.wrapper.children[0].classList = 'box2'
    //   this.$refs.wrapper.children[1].classList = 'box1'
    // }, 3000)
    console.log()
  },
  methods: {
    onClickNumber(n) {
      // let j = this.classes.length - 1
      // let last = this.selectedIndex
      // this.selectedIndex = n
      // let temp = this.$refs.window.children[n].classList[0]
      // console.log(temp)
      // this.$refs.window.children[n].classList = this.$refs.window.children[
      //   last
      // ].classList[0]
      // this.$refs.window.children[last].classList = temp
      // console.log(this.classes)
      // for (let i = 0; i <= j; i++) {
      //   this.$refs.window.children[i].classList = this.classes[i]
      // }
    },
    onMouseEnter() {
      this.arrowVisible = true
    },
    onMouseLeave() {
      this.arrowVisible = false
    },
    nextPic() {
      let j = this.classes.length - 1
      this.classes.unshift(this.classes[j])
      this.classes.pop()
      for (let i = 0; i <= j; i++) {
        this.$refs.window.children[i].classList = this.classes[i]
      }
      this.selectedIndex++
      if (this.selectedIndex >= this.classes.length) {
        this.selectedIndex = 0
      }
    },
    prevPic() {
      let j = this.classes.length - 1
      this.classes.push(this.classes[0])
      this.classes.shift()
      for (let i = 0; i <= j; i++) {
        this.$refs.window.children[i].classList = this.classes[i]
      }
      this.selectedIndex--
      if (this.selectedIndex < 0) {
        this.selectedIndex = this.classes.length - 1
      }
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  // box-sizing: border-box;
  perspective: 2000px;
}
.wrapper {
  width: 1000px;
  height: 300px;
  position: relative;
  .window {
    // border: 1px solid red;
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
      transition: all 2s;
      border-radius: 8px;
    }
    .box1 {
      transform-origin: 0 100%;
      // transform: translate(0, -15px) scale(0.9);
      transform: translate3d(-60px, 0px, -300px);
      z-index: 18;
    }
    .box2 {
      // transform: translateX(250px);
      transform: translate3d(50%, 0, 0);
      z-index: 20;
    }
    .box3 {
      transform-origin: 100% 100%;
      // transform: translate(500px, -15px) scale(0.9);
      transform: translate3d(560px, 0, -300px);
      z-index: 18;
    }
  }
  .y-slides-left {
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    > span {
      display: inline-flex;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background: #4a6494;
      color: white;
      &:hover {
        cursor: pointer;
        background: #384c6e;
      }
    }
  }
  .y-slides-dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      display: inline-flex;
      width: 24px;
      height: 4px;
      border-radius: 2px;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      background: #5f76a0;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: #8391a5;
        &:hover {
          cursor: default;
        }
      }
    }
  }
  .y-slides-right {
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
    z-index: 23;
    > span {
      display: inline-flex;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background: #4a6494;
      color: white;
      &:hover {
        cursor: pointer;
        background: #384c6e;
      }
    }
  }
}
</style>
