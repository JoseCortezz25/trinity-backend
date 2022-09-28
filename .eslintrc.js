module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6,
    ecmaVersion: 12,
  },
  rules: {
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'import/first': 0,
    'space-before-function-paren': 0,
  },
}
