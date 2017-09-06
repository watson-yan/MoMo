import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import alias from 'rollup-plugin-alias'
// const resolve = require('rollup-plugin-node-resolve')
// const babel = require('rollup-plugin-babel')
// const vue = require('rollup-plugin-vue')
// const sass = require('rollup-plugin-sass')
// const uglify = require('rollup-plugin-uglify')
// const replace = require('rollup-plugin-replace')

export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: './dist/bundle.js',
  plugins: [
    resolve(),
    alias({
      'vue': 'vue/dist/vue.esm.js'
    }),
    vue({css: true}),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    sass({
      output: './dist/bundle.css'
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ]
}
