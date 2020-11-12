---
title: Input 输入框
---

# 输入框

<grid-test title="基础用法" description="">
  <input-demo1></input-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-input value="hello world"></y-input>
  </highlight-code>
</grid-test>

<grid-test title="双向绑定" description="">
  <input-demo2></input-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-input v-model="value"></y-input>
    <div style="margin-top: 10px;">value: {{ value }}</div>
    <script>
      export default {
        data() {
          return {
            value: '你好',
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="禁用状态" description="">
  <input-demo3></input-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-input v-model="value" disabled></y-input>
  </highlight-code>
</grid-test>

<grid-test title="只读状态" description="">
  <input-demo6></input-demo6>
  <highlight-code slot="codeText" lang="vue">
    <y-input v-model="value" readonly></y-input>
  </highlight-code>
</grid-test>

<grid-test title="错误信息" description="">
  <input-demo4></input-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-input value="hello world" error="输入格式不对"></y-input>
  </highlight-code>
</grid-test>

<grid-test title="带 Icon 的输入框" description="带有图标标记输入类型">
  <input-demo5></input-demo5>
  <highlight-code slot="codeText" lang="vue">
    <y-input
      value=""
      icon="settings"
      placeholder="enter something"
    ></y-input>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数         | 说明               | 类型    | 可选值                                     | 默认值 |
| ------------ | ------------------ | ------- | ------------------------------------------ | ------ |
| value        | 绑定值             | string  | —                                          | —      |
| type         | 类型               | string  | text，textarea 和其他原生 input 的 type 值 | text   |
| readonly     | 原生属性，是否只读 | boolean | —                                          | false  |
| error        | 错误信息           | string  | —                                          | —      |
| disabled     | 禁用               | boolean | —                                          | false  |
| placeholder  | 输入框占位文本     | string  | —                                          | —      |
| icon         | 图标名称           | string  | —                                          | —      |
| iconPosition | 图标位置           | string  | left / right                               | left   |
