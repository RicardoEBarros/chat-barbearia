import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import stylisticJs from '@stylistic/eslint-plugin'

export default defineConfig([
  ...tseslint.configs.recommended,
  { 
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts}' ], 
    plugins: { 
      js, 
      '@stylistic/js': stylisticJs 
    }, 
    extends: [ 'js/recommended' ], 
    languageOptions: { globals: globals.browser },
    rules: {
      'semi': [ 'error', 'never' ],
      'eqeqeq': 'error',
      'no-eval': 'error',
      'curly': [ 'warn', 'all' ],
      'no-var': 'warn',
      'indent': [ 'error', 2 ],
      'prefer-const': 'warn',
      'quotes': [ 'error', 'single' ],
      'arrow-spacing': [ 'error', { before: true, after: true } ],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@stylistic/js/function-call-spacing': [ 'error', 'never' ],
      '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/js/eol-last': [ 'error', 'always' ],
      '@stylistic/js/function-paren-newline': [ 'error', { minItems: 5 } ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
])
