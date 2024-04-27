// {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint"
//     ],
//     "rules": {
//         "@typescript-eslint/no-inferrable-types": "off",
//         "@typescript-eslint/explicit-module-boundary-types": "off",
//         "@typescript-eslint/no-explicit-any": "off",
//         "@typescript-eslint/no-unused-vars": "off",
//         "require-await": "error",
//         "camelcase": "error",
//         "indent": [
//             "error",
//             2
//         ],
//         "semi": ["error", "always"],
//         "quotes": ["error", "single"],
//         "no-unused-vars": "error",
//         "prefer-const": "error",
//         "prefer-arrow-callback": "error",
//         "object-shorthand": "error",
//         "no-console": "warn"
//     }
// }
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      quotes: [1, 'single'],
      'object-curly-spacing': [1, 'always'],
      'max-len': ['error', { code: 100, ignoreStrings: true }],
      'no-trailing-spaces': [1],
      '@typescript-eslint/no-unused-vars': [2],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ]
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
  };