module.exports = {
  base: '/yued/',
  title: 'Yued UI',
  description: 'UI 框架',
  themeConfig: {
    lastUpdated: '最后更新时间',
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
          '/components/collapse-test',
          '/components/grid-test',
          '/components/input',
          // '/components/layout',
          '/components/layout-test',
          // '/components/popover',
          '/components/popover-test',
          // '/components/tabs',
          '/components/tabs-test',
          // '/components/toast',
          '/components/toast-test',
          '/components/carousel',
          '/components/menu-test',
          '/components/pagination-test',
          '/components/table-test',
          '/components/upload',
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
}
