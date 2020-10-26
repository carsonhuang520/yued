<template>
  <div id="app" style="padding: 100px;">
    <!-- {{ selected }} -->
    <y-cascader
      :source="source"
      popover-height="200px"
      :selected="selected"
      @update:selected="selected = $event"
    ></y-cascader>
  </div>
</template>
<script>
import Cascader from './cascader'
import db from './db'

function ajax(parentId = 0) {
  return db.filter((item) => item.parent_id === parentId)
}

console.log(ajax())

export default {
  name: 'demo',
  components: {
    'y-cascader': Cascader,
  },
  data() {
    return {
      selected: [],
      source: ajax(),
    }
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eeeeee;
  --border-radius: 4px;
  --color: #333333;
  --border-color: #999999;
  --border-color-hover: #666666;
}

body {
  font-size: var(--font-size);
}
</style>
