import nodePolyfills from 'rollup-plugin-polyfill-node'
import typescript2 from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import fs from 'node:fs'
// import pkg from './package.json' assert { type: 'json' }
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// esm 模块下使用 __dirname 与 __pathname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const root = path.join(__dirname, './src')
const moduleNames = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((p) => p.isFile())
  .map((p) => {
    return p.name
  })

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  // umd，输出单个 bundle 文件
  {
    input: './src/index.ts',
    output: {
      file: './umd/tool.min.js',
      format: 'umd',
      name: 'tool',
    },
    plugins: [
      typescript2({
        clean: true,
        useTsconfigDeclarationDir: true,
        tsconfig: './tsconfig.build.json',
      }),
      commonjs(),
      resolve(),
      nodePolyfills(),
    ],
  },
  // esm，输出单个有目录层级的文件
  {
    input: moduleNames.map((name) => `./src/${name}`),
    output: {
      dir: 'lib',
      chunkFileNames: '[name].js',
      format: 'es',
    },
    external: ['chalk', 'dayjs'],
    treeshake: true,
    plugins: [
      typescript2({
        clean: true,
        tsconfig: './tsconfig.build.json',
      }),
      commonjs(),
      resolve(),
      nodePolyfills(),
    ],
  },
]
