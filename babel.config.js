module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ]
  presets: ['@vue/app'],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
}
