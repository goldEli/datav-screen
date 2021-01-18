module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off',
  },
}