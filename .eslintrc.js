module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'airbnb',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin
    // that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: false,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React|jsx|ignoredUnusedVar' }],
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 2,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'no-multiple-empty-lines': 0,
    'react/jsx-uses-react': [1],
    'arrow-parens': 0,
    'react/destructuring-assignment': 0,
    'implicit-arrow-linebreak': 0,
    'lines-between-class-members': 0,
    'no-nested-ternary': 'off',
    'max-len': ['error', { code: 120 }],
    'operator-linebreak': 0,
    'no-plusplus': 0,
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
}
