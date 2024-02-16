/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["../../.eslintrc.cjs", "next"],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  }
};
