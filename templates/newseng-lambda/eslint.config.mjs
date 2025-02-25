// @ts-check
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslint from '@eslint/js';

export default tseslint.config(
  {
    ignores: ['**/dist/**'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-console': 'warn',
      'no-param-reassign': 'off',
      'import/no-named-as-default': 'off',
      'object-shorthand': ['error', 'always'],
    },
  }
);