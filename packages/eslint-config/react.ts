import type { TSESLint } from '@typescript-eslint/utils'

const config: TSESLint.Linter.Config = {
  extends: [
    '@asmadsen/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
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
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = config
