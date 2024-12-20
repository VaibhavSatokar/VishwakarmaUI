import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'build/index.js',           // CommonJS output
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
    {
      file: 'build/index.esm.js',       // ESM output
      format: 'esm',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,                // Enable declaration file generation
      declarationDir: 'build',          // Correct path for declaration files (inside build/)
      rootDir: 'src',                   // Root source directory
    }),
    terser(),                           // Optional, to minify the output
  ],
  external: (id) => {
    // Externalize all React-related dependencies
    if (id === 'react' || id === 'react-dom' || id === 'react/jsx-runtime') {
      return true;
    }

    // Externalize all @mui/material and submodules
    if (id.startsWith('@mui/material') || id.startsWith('@mui/icons-material')) {
      return true;
    }

    return false; // Bundle everything else
  },
};
