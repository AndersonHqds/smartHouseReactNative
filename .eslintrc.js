module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "useJSXTextNode": true,
      "project": "./tsconfig.json",
      "tsconfigRootDir": "."
    },
 "extends": [
      "plugin:@typescript-eslint/recommended",
      "@react-native-community",
      'plugin:prettier/recommended',
    ],
};
