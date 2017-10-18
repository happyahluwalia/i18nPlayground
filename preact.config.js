export default (config, env, helpers) => {
	//let { loaders } = helpers.getLoaders(config);
	let internal = { test: /\.js$/, loader: 'preact-i18nline/webpack-loader' };

	//console.log(config.module.loaders[10]);
    config.module.loaders.push(internal);
};