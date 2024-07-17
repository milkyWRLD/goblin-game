/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		files: ['**/*.js'],
		rules: {
			// добавьте несколько простых правил
			'no-unused-vars': 'warn',
			semi: ['error', 'always'],
		},
	},
]
