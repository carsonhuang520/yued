---
title: Popover 弹出框
---

# 弹出框

<grid-test title="悬浮激活" description="鼠标 hover 后弹出框">
  <popover-demo1></popover-demo1>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</grid-test>

<grid-test title="点击激活" description="鼠标 click 后弹出框">
  <popover-demo2></popover-demo2>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</grid-test>

<grid-test title="嵌套操作" description="可以嵌套操作">
  <popover-demo3></popover-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-popover confirm>
      <span slot="content">你确定删除这条内容吗?</span>
      <y-button type="primary">点我</y-button>
    </y-popover>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; } 
table th:nth-of-type(4){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数     | 说明             | 类型    | 可选值                      | 默认值 |
| -------- | ---------------- | ------- | --------------------------- | ------ |
| trigger  | 触发方式         | string  | click / hover               | click  |
| position | 出现位置         | string  | top / bottom / left / right | top    |
| confirm  | 是否显示确认按钮 | boolean | —                           | false  |
