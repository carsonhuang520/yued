---
title: Menu 导航菜单
---

# 导航菜单

<grid-test title="顶栏" description="适用广泛的基础用法">
  <menu-demo1></menu-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-menu :selected.sync="selected">
      <y-menu-item name="home">首页</y-menu-item>
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire">招聘</y-menu-item>
      <y-menu-item name="product">产品</y-menu-item>
    </y-menu>
    <script>
      export default {
        data() {
          return {
            selected: ['home'],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="侧栏" description="垂直菜单，可内嵌子菜单">
  <menu-demo2></menu-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-menu :selected.sync="selected" vertical>
      <y-menu-item name="home">首页</y-menu-item>
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire">招聘</y-menu-item>
      <y-menu-item name="product">产品</y-menu-item>
    </y-menu>
    <script>
      export default {
        data() {
          return {
            selected: ['home'],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="禁用" description="可以通过disabled禁用某一个菜单">
  <menu-demo3></menu-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-menu :selected.sync="selected">
      <y-menu-item name="home">首页</y-menu-item>
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire" disabled>招聘</y-menu-item>
      <y-menu-item name="product">产品</y-menu-item>
    </y-menu>
    <script>
      export default {
        data() {
          return {
            selected: ['home'],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="hover展开" description="支持鼠标hover展开子目录，只有在水平方向有效">
  <menu-demo4></menu-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-menu :selected.sync="selected" trigger>
      <y-menu-item name="home">首页</y-menu-item>
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire" disabled>招聘</y-menu-item>
      <y-menu-item name="product">产品</y-menu-item>
    </y-menu>
    <script>
      export default {
        data() {
          return {
            selected: ['home'],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<style scoped>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Menu Attributes

| 参数     | 说明            | 类型    | 可选值 | 默认值 |
| -------- | --------------- | ------- | ------ | ------ |
| vertical | 是否垂直显示    | boolean | —      | false  |
| trigger  | 是否 hover 展开 | boolean | —      | false  |

### MenuItem Attributes

| 参数     | 说明     | 类型    | 可选值 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| disabled | 是否禁用 | boolean | —      | false  |
