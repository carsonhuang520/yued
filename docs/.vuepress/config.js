module.exports = {
  base: '/yued/',
  title: 'Yued UI',
  description: 'UI 框架',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '' },
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/carsonhuang520/yued' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        children: [
          '/components/button-test',
          '/components/cascader',
          '/components/collapse',
          '/components/grid-test',
          '/components/input',
          '/components/layout',
          '/components/layout-test',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/carousel',
          '/components/menu',
          '/components/pagination',
          '/components/table',
          '/components/upload',
        ],
      },
    ],
  },
}
