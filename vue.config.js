const { defineConfig } = require("@vue/cli-service")

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: function (config) {
        config.plugin("monaco").use(new MonacoWebpackPlugin())
    },
})
