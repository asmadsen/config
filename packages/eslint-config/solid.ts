import type { TSESLint } from '@typescript-eslint/utils'

const config: TSESLint.Linter.Config = {
  plugins: [
    "solid"
  ],
  extends: [
    '@asmadsen/eslint-config',
    "plugin:solid/typescript"
  ],
}

module.exports = config
