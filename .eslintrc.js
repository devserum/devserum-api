module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:jest/recommended",
  ],
  "plugins": ["jest"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-param-reassign": [1],
  }
};
