/** @type {import('@tarojs/cli').UserConfigExport} */
const config = {
  designWidth: function designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input && input.file && input.file.includes('nutui')) {
      return 375;
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750;
  },
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
      force: true,
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  plugins: [
    ['@dcasia/mini-program-tailwind-webpack-plugin/dist/taro', {
      enableWindiCSS: false,
    }],
    '@tarojs/plugin-http',
    '@tarojs/plugin-html',
    'taro-plugin-compiler-optimization',
  ],
  sass: {
    data: '@import "@nutui/nutui-react-taro/dist/styles/variables.scss";',
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: ['nut-']
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    commonChunks: ['runtime', 'vendors', 'taro', 'common', 'app-tailwind'],
    // miniCssExtractPluginOption: {
    //   filename: '[name].css',
    //   chunkFilename: '[name].css',
    // },
    webpackChain(chain, webpack) {
      chain.merge({
        optimization: {
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              appnutui: {
                name: config.isBuildPlugin ? 'plugin/app-tailwind' : 'app-tailwind',
                test: /app\.tailwind/,
                chunks: 'all',
                priority: -1,
              },
            },
          },
        },
      });
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'browser',
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
