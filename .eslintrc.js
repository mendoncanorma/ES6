module.exports = {
  "extends": "eslint:all",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  },
  "rules": {
    "no-trailing-spaces": "off",
    "no-console": "off",
    "no-undef": "off",
    "indent": ["off"],
    "sort-keys": "off",
    "no-implicit-globals": "error",
    "no-var": "error",
    "prefer-const": ["off", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "padded-blocks": "off",
    "eol-last": "error",
    "no-magic-numbers": ["error", { "enforceConst": true, "ignore": [1,2,3,4,5,6,7,8,9,10] }],
    "array-element-newline": ["error", "never"],
    "linebreak-style": "off",
    "prefer-arrow-callback": "off",
    "func-names": "off",
    "object-property-newline": "off",
    "array-element-newline": "off"
  }
};