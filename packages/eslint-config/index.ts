import type { TSESLint } from '@typescript-eslint/utils'

const strict =
  process.env.PRE_COMMIT || process.env.NODE_ENV?.toLowerCase() === 'production'

const config: TSESLint.Linter.Config = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'promise',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'import',
    'unused-imports',
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': 'error',
    'no-console': strict ? 'error' : 'off',
    'no-debugger': strict ? 'error' : 'off',
    'import/no-default-export': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'wallaby.config.js'],
      parser: 'espree',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.config.[jt]s'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}

module.exports = config
