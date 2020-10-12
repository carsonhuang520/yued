module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "sinon-chai"],
    client: {
      chai: {
        includeStack: true,
      },
    },
    /* 
        告诉 karma 测试用例在那个文件下
        dist\/**\/*.test.js 会检查dist文件夹下所有的，不管有多少子目录
        不加 css 会出错（当遇到与样式相关的）
    */
    files: ["dist/**/*.test.js", "dist/**/*.test.css"],
    exclude: [],
    preproocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"], // 打开浏览器
    singleRun: false,
    concurrency: Infinity,
  });
};
