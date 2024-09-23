/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss', 'tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'off',
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        'next/core-web-vitals',
        //  'plugin:@typescript-eslint/recommended',
        //'plugin:@typescript-eslint/recommended-type-checked',
        // 'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:tailwindcss/recommended',
        'prettier',
      ],
      rules: {
        'tailwindcss/classnames-order': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
};
