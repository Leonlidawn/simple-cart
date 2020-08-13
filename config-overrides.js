const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

addWebpackAlias({
 ['@']: path.resolve(__dirname, './src'),
});

module.exports = override(
	addWebpackAlias({
		 '@': path.resolve(__dirname, './src/'),
	}),
	addDecoratorsLegacy()
);