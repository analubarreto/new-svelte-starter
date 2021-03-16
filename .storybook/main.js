const path = require('path');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	stories: [
		'../src/components/**/*.stories.js',
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
	],
	webpackFinal: (config, mode) => {
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes('svelte-loader'),
		);
		svelteLoader.options.preprocess = sveltePreprocess({ postcss: true });
		config.resolve.alias = { svelte: path.resolve('node_modules', 'svelte') };
		return config;
	},
};
