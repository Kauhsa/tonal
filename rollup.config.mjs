import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'packages/modules/dist/index.mjs',
    output: {
      file: 'bundle/tonal.js',
      format: 'es'
    },
    plugins: [nodeResolve()]
  },
  {
    input: "packages/modules/dist/index.d.ts",
    output: {
      file: "bundle/tonal.d.ts",
      format: 'es'
    },
    plugins: [dts({ respectExternal: true })],
  }
];
