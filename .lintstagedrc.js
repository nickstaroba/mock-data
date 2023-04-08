const eslint = require("@eterna/lint-staged-config-eslint");
const prettier = require("@eterna/lint-staged-config-prettier");

module.exports = {
  ...eslint,
  ...prettier,
};
