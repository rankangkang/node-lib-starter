import typescript2 from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json' assert { type: 'json' }

// esm 配置文件，不能够再使用 __dirname 获取文件目录

export default [
  {
    input: 'src/index.ts',
    external: [],
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es', exports: 'named' },
    ],
    plugins: [
      typescript2({
        clean: true,
        tsconfig: './tsconfig.build.json',
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      resolve(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'types/index.d.ts',
      },
    ],
    plugins: [
      dts({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },
]
