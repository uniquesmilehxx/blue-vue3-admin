const vueConfig = {
    // less配置
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("less").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("style-resources-loader")
        .loader("style-resources-loader")
        .options({
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: "./src/assets/css/common.less"
        })
        .end()
    })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': 'pink',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}
module.exports = vueConfig