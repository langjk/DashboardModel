import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1920,
  viewportUnit: 'vw'
})
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 将 @ 映射到 src 目录
    }
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
});
