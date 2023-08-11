module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-natural'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-objects": "off",
    "perfectionist/sort-jsx-props": "off",
    'react-refresh/only-export-components': 'warn',
  },
  settings: { react: { version: '18.2' } },
}
