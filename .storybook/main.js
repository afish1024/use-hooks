module.exports = {
	stories: [
		// '../demos/*.stories.tsx',
		'../src/**/*.stories.(js|jsx|ts|tsx)',
		'../README.md',
		'../src/**/*.stories.mdx',
	],
	core: {
		builder: 'webpack5'
	},
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-storysource'
	]
};
