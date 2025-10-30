import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";

export default [
  {
    // Main build configuration - generates ESM format JavaScript files
    input: "src/index.ts",
    output: [
      {
        esModule: true,
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    makeAbsoluteExternalsRelative: true,
    // Custom warning handler function
    onwarn(warning, warn) {
      // Ignore circular dependency warnings (mainly from luxon library)
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
      // Ignore module level directive warnings (like 'use client', etc.)
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
      // Ignore "this" being rewritten to undefined warnings
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      // Show other warnings
      warn(warning);
    },
    plugins: [
      // Automatically exclude peer dependencies
      peerDepsExternal(),
      // Resolve Node.js modules
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      // Convert CommonJS modules to ESM
      commonjs({
        // Handle this context issues
        transformMixedEsModules: true,
        // Ignore module level directives
        ignore: ['use client', 'no babel-plugin-flow-react-proptypes'],
      }),
      // TypeScript compilation
      typescript({ 
        tsconfig: "./tsconfig.json",
        // Generate necessary declaration files for dts plugin
        compilerOptions: {
          declaration: true,
          declarationMap: false,
          declarationDir: "dist/esm",
        },
      }),
      // Code minification
      terser({
        // Preserve necessary comments and directives during compression
        compress: {
          directives: false,
        },
      }),
      // Handle CSS imports
      css({ alwaysOutput: true, minify: true }),
      // Copy static assets
      copy({
        targets: [{ src: "src/components/assets", dest: "dist" }],
      }),
    ],
    // External dependencies that won't be bundled
    external: ["react", "react-dom", "styled-components"],
  },
  {
    // Type definition file build configuration
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/mds.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
