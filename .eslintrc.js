module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
