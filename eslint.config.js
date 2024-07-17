/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': 'warn',
			semi: ['error', 'never'],
		},
	},
]
