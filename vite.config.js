// vite.config.js
export default {
  // 声明入口文件
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'reqCacher',
      fileName: 'reqCacher'
    },
    // 声明构建输出目录
    outDir: 'dist',
    // 声明库构建格式
    formats: ['es', 'cjs', 'umd'],
    rollupOptions: {
      external: ["lodash"]
    }
  }
}
