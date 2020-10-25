<template>
  <div id="app" style="padding: 100px;">
    <y-cascader :source="source" popover-height="200px"></y-cascader>
  </div>
</template>
<script>
import Cascader from './cascader'
export default {
  name: 'demo',
  components: {
    'y-cascader': Cascader,
  },
  data() {
    return {
      source: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {
                  name: '上城区',
                },
                {
                  name: '西湖区',
                },
              ],
            },
            {
              name: '嘉兴',
              children: [
                {
                  name: '南湖区',
                },
                {
                  name: '秀洲区',
                },
              ],
            },
          ],
        },
        {
          name: '江苏',
          children: [
            {
              name: '南京',
              children: [
                {
                  name: '上城',
                },
                {
                  name: '西湖',
                },
              ],
            },
            {
              name: '苏州',
              children: [
                {
                  name: '南湖',
                },
                {
                  name: '秀洲',
                },
              ],
            },
          ],
        },
      ],
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
