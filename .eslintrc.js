module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": ["warn", "single"],
    "semi": ["warn", "never"],
    "arrow-body-style": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "import/prefer-default-export": "off",
    "operator-linebreak": "off",
    "arrow-parens": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/extensions":"off",
    "import/no-unresolved": "off",
    "import/resolver": "off",
  },
};
