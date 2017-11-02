import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'
import autoprefixer from 'autoprefixer'
import sass from 'rollup-plugin-sass'
import vue from 'rollup-plugin-vue'
import postcss from 'postcss'

export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: './dist/bundle.js',
  plugins: [
    resolve(),
    alias({
      'vue': 'vue/dist/vue.esm.js'
    }),
    vue({
      css: true,
      postcss() { // 配置vue文件中的 postcss/autoprefixer
        return [autoprefixer()]
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    sass({
      output: './dist/bundle.css',
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    process.env.NODE === 'production' && uglify()
  ]
}
