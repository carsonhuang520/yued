<template>
  <div id="app" style="padding: 100px;">
    <y-menu :selected.sync="selected">
      <y-menu-item name="home">首页</y-menu-item>
      <y-menu-item name="about">关于</y-menu-item>
      <y-menu-item name="hire">招聘</y-menu-item>
    </y-menu>
  </div>
</template>

<script>
import Menu from '../menu/menu'
import MenuItem from '../menu/menu-item'
import SubMenu from '../menu/sub-menu'
export default {
  name: 'TestDemo',
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
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
