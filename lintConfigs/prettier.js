const readPrettierConfig = require("./readPrettierConfig");

const defaultPrettierConfig = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: false,
  jsxBracketSameLine: true,
  trailingComma: "es5",
};

module.exports = {
  extends: ["prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["warn", readPrettierConfig() || defaultPrettierConfig],
  },
};
