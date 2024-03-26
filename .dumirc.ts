import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: '滚动容器',
  },
  esbuildMinifyIIFE: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/XM-SCROLL/dist/',
  hash: true,
  history: {type: 'hash',},
});
