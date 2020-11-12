---
title: Carousel 走马灯
---

# 走马灯

<grid-test title="基础用法" description="适用广泛的基础用法">
  <carousel-demo1></carousel-demo1>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</grid-test>

<grid-test title="自动轮播" description="可以自动轮播">
  <carousel-demo2></carousel-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-slides :selected.sync="selected" :auto-play="true">
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
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数          | 说明                       | 类型     | 可选值 | 默认值 |
| ------------- | -------------------------- | -------- | ------ | ------ |
| selected      | 当前选中项                 | string   | —      | —      |
| autoPlay      | 是否自动播放               | boolean  | —      | false  |
| autoPlayDelay | 自动播放的间隔，单位为毫秒 | function | —      | 3000   |
