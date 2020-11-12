---
title: Pagination 分页
---

# 分页

<grid-test title="基础用法" description="基础的分页">
  <pagination-demo1></pagination-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-pagination
      :total-page="totalPage"
      :current-page.sync="currentPage"
      :hide-on-single-page="false"
    ></y-pagination>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数             | 说明                     | 类型    | 可选值 | 默认值 |
| ---------------- | ------------------------ | ------- | ------ | ------ |
| totalPage        | 总页数                   | number  | —      | —      |
| currentPage      | 当前页数                 | number  | —      | 1      |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | —      | false  |
