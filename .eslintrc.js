module.exports = {
  "extends": [
    "airbnb",
    "prettier",
  ],
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "rules": {
    "import/no-unresolved": "off",
    "prettier/prettier": ["error"],
  },
  "env": {
    "browser": true,
    "node": true,
  },
};
