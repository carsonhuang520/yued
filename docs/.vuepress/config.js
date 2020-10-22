module.exports = {
  base: '/yued/',
  title: 'Yued UI',
  description: 'UI 框架',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/collapse',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
        ],
      },
    ],
  },
}
