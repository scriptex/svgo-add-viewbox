/**
 * @typedef {Array<import('svgo').PluginConfig>} SVGOPlugins
 */

import addViewBox from '../index.mjs';

export default {
	/**
	 * @type {SVGOPlugins}
	 */
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false
				}
			}
		},
		addViewBox
	]
};
