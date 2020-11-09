---
title: Button 按钮
---

# 按钮

<!-- <ClientOnly> -->
<button-test title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <y-button>默认按钮</y-button>
        <y-button icon="settings">默认按钮</y-button>
        <y-button :loading="true">默认按钮</y-button>
        <y-button disabled>默认按钮</y-button>
      </div>
    </template>
  </highlight-code>
</button-test>
<button-test title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <y-button>默认按钮</y-button>
        <y-button icon="settings">默认按钮</y-button>
        <y-button :loading="true">默认按钮</y-button>
        <y-button disabled>默认按钮</y-button>
      </div>
    </template>
  </highlight-code>
</button-test>
<!-- </ClientOnly> -->

## Attributes

| 参数     |     说明     |    类型 | 可选值                                             | 默认值  |
| -------- | :----------: | ------: | -------------------------------------------------- | ------- |
| size     |     尺寸     |  string | small / default / large                            | default |
| type     |     类型     |  string | primary / success / warning / danger / info / text | —       |
| disabled | 是否禁用状态 | boolean | —                                                  | false   |
