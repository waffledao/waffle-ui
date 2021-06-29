/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withImages = require('next-images')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'))

const lessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    config.plugins.push(new AntdDayjsWebpackPlugin())
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    return config
  },
}

module.exports = withPlugins([[withImages], [withLess, lessConfig]])
