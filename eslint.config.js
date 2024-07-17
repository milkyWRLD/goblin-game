const pluginJs = require('@eslint/js')
const jestPlugin = require('eslint-plugin-jest')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const globals = require('globals')

module.exports = {
	overrides: [
		{
			files: ['*.js'],
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
			env: {
				browser: true,
				node: true,
			},
			plugins: ['@eslint/js', 'jest', 'prettier'],
			extends: [
				'eslint:recommended',
				'plugin:@eslint/js/recommended',
				'plugin:jest/recommended',
				'plugin:prettier/recommended',
			],
			rules: {
				'no-unused-vars': 'warn',
				'jest/prefer-expect-assertions': 'off',
			},
			ignorePatterns: ['dist/*'],
		},
	],
}
