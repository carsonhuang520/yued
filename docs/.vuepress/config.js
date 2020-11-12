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
          '/components/cascader-test',
          '/components/collapse-test',
          '/components/grid-test',
          '/components/input-test',
          '/components/layout-test',
          '/components/popover-test',
          '/components/tabs-test',
          '/components/toast-test',
          '/components/carousel-test',
          '/components/menu-test',
          '/components/pagination-test',
          '/components/table-test',
          '/components/upload-test',
          '/components/form-test',
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
}
