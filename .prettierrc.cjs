/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  useTabs: false,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
}

module.exports = config
