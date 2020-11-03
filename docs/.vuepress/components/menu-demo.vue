<template>
  <div>
    <h4>示例1</h4>
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
    <pre><code>{{ content }}</code></pre>
    <h4>示例2 支持 disabled 禁用</h4>
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
    <pre><code>{{ content2 }}</code></pre>
    <h4>示例3 支持垂直方向</h4>
    <y-menu :selected.sync="selected3" vertical>
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
    <pre><code>{{ content3 }}</code></pre>
    <h4>示例4 支持鼠标hover展开子目录，只有在水平方向有效</h4>
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
      <y-menu-item name="hire">招聘</y-menu-item>
      <y-menu-item name="product">产品</y-menu-item>
    </y-menu>
    <pre><code>{{ content4 }}</code></pre>
  </div>
</template>
<script>
import Menu from '../../../src/menu/menu'
import MenuItem from '../../../src/menu/menu-item'
import SubMenu from '../../../src/menu/sub-menu'
export default {
  components: {
    'y-menu': Menu,
    'y-menu-item': MenuItem,
    'y-sub-menu': SubMenu,
  },
  data() {
    return {
      selected: ['home'],
      selected2: ['home'],
      selected3: ['home'],
      selected4: ['home'],
      content: `<y-menu :selected.sync="selected">
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
</y-menu>`,
      content2: `<y-menu :selected.sync="selected">
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
</y-menu>`,
      content3: `<y-menu :selected.sync="selected3" vertical>
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
</y-menu>`,
      content4: `<y-menu :selected.sync="selected" trigger>
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
</y-menu>`,
    }
  },
}
</script>
