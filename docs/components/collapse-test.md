---
title: Collapse 折叠面板
---

# 折叠面板

<grid-test title="基础用法" description="可同时展开多个面板，面板之间不影响">
  <collapse-demo1></collapse-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-collapse :selected.sync="selected">
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
  </highlight-code>
</grid-test>

<grid-test title="手风琴效果" description="每次只能展开一个面板">
  <collapse-demo2></collapse-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-collapse :selected.sync="selected" accordion>
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
  </highlight-code>
</grid-test>
