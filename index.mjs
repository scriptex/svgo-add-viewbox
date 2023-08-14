/**
 * @typedef {import("svgo").CustomPlugin} SVGOPlugin
 * @typedef {SVGOPlugin['fn']} SVGOPluginFunction
 * @typedef {SVGOPlugin['name']} SVGOPluginName
 * @typedef {import("svgo/lib/types").XastElement} SVGOElement
 */

/**
 * @type {SVGOPluginName}
 */
const name = 'SVGOAddViewBox';

/**
 * @type {SVGOPluginFunction}
 */
const fn = () => ({
	root: {
		enter: node => {
			const element = /** @type {SVGOElement} */ (node?.children?.[0]);

			if (!element) {
				return;
			}

			const { width, height } = element.attributes;

			if (typeof width === 'undefined' || typeof height === 'undefined') {
				return;
			}

			element.attributes.viewBox = `0 0 ${Number(width)} ${Number(height)}`;
		}
	}
});

/**
 * @type {SVGOPlugin}
 */
export default {
	fn,
	name
};
