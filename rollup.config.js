import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript';
import json from 'rollup-plugin-json';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';

export default [
  {
    input: './src/main.ts',
    output: {
      format: 'iife',
      file: './public/bundle.js',
      compact: true
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      resolve(),
      commonjs(),
      typescript(),
      sass(),
      postcss({
        plugins: [
          tailwindcss(),
          autoprefixer(),
          cssnano(),
          purgecss({
            content: ['./views/**/*.html', './src/**/*.vue', './src/**/*.css'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      }),
      vue(),
      json({
        exclude: ['node_modules/**'],
      }),
    ]
  },
];
