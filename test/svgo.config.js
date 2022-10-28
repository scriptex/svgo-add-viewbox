const addViewBox = require('..');

module.exports = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false
				}
			}
		},
		{
			fn: addViewBox.fn,
			name: 'addViewBox',
			type: addViewBox.type,
			active: addViewBox.active,
			description: addViewBox.description
		}
	]
};
