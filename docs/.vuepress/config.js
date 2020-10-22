module.exports = {
  title: 'Yued UI',
  description: 'UI 框架',
  themeConfig: {
    sidebar: 'auto',
    nav: [{ text: '主页', link: '' }],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        children: ['/components/button'],
      },
    ],
  },
}
