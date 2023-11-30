import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'YinXi',
    logo: '/logo.png',
  },
  cssLoader: {},
  chainWebpack(config) {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader');
  },
});
