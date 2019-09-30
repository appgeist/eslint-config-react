// prettier-ignore
module.exports = {
  root: true,
  env: { es6: true, browser: true },
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 10 },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': { rootPathPrefix: '~', rootPathSuffix: '.' }
    }
  },
  plugins: ['import', 'prettier'],
  rules: {
    'indent': 'error',
    'max-len': ['warn', 120],
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'warn',
    'camelcase': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-globals': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
    'function-paren-newline': ['error', 'consistent'],
    'space-in-parens': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'key-spacing': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'space-infix-ops': 'error',
    'global-require': 'off',
    'radix': 'off',
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['error', 'consistent'],
    'import/no-unresolved': ['error', { ignore: [ 'mdi-react' ] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { aspects: ['invalidHref', 'preferButton'] }],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
};
