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
  "rules": {
    "react-native/no-inline-styles": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
