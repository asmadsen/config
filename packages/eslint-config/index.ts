import type {TSESLint} from '@typescript-eslint/experimental-utils'

const strict =
  process.env.PRE_COMMIT || process.env.NODE_ENV?.toLowerCase() === 'production'

const config: TSESLint.Linter.Config =  {
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
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-read-only-props': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-sort-props': 'error',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
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
  ],
}

module.exports = config
