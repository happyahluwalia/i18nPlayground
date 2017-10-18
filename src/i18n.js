let currentTranslation = {};

module.exports = {
	getTranslation() {
		return currentTranslation;
	},

	loadI18n(region, cb) {
		switch (region) {
			case 'en':
				require.ensure([], (require) => {
					cb(currentTranslation = require('../src/translations/locales/en'));
				}, 'i18n-en'); // will create a chunk named 'i18n-en'
				break;
			case 'es':
				require.ensure([], (require) => {
					cb(currentTranslation = require('../src/translations/locales/es'));
				}, 'i18n-es'); // will create a chunk named 'i18n-fr'
				break;
			case 'de':
				require.ensure([], (require) => {
					cb(currentTranslation = require('../src/translations/locales/de'));
				}, 'i18n-de'); // will create a chunk named 'i18n-fr'
				break;
			case 'zh':
				require.ensure([], (require) => {
					cb(currentTranslation = require('../src/translations/locales/zh'));
				}, 'i18n-zh'); // will create a chunk named 'i18n-fr'
				break;
			default:
				require.ensure([], (require) => {
					cb(currentTranslation = require('../src/translations/locales/en'));
				}, 'i18n-en');
		}
	}
};