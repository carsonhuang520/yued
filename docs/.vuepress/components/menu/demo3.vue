<template>
  <div style="width: 100%;">
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
  </div>
</template>
<script>
import Menu from '../../../../src/menu/menu'
import MenuItem from '../../../../src/menu/menu-item'
import SubMenu from '../../../../src/menu/sub-menu'
export default {
  components: {
    'y-menu': Menu,
    'y-menu-item': MenuItem,
    'y-sub-menu': SubMenu,
  },
  data() {
    return {
      selected: ['home'],
    }
  },
}
</script>
