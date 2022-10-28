'use strict';

exports.type = 'perItem';

exports.active = true;

exports.description = 'Adds viewBox attribute based on width and height';

/**
 * Add viewBox attribute based on width and height
 *
 * @example
 * <svg width="100" height="50" />
 *   ↓
 * <svg width="100" height="50" viewBox="0 0 100 50" />
 *
 * @param {Object} item current iteration item
 * @return {Void}
 *
 * @author Atanas Atanasov
 */
exports.fn = function (item) {
	if (item.type !== 'root') {
		return item;
	}

	const {
		name,
		attributes,
		attributes: { width, height }
	} = item.children[0];

	if (
		(name === 'svg' && !!width && !!height && !attributes.viewBox) ||
		(Number.isNaN(Number(width)) === false && Number.isNaN(Number(height)) === false)
	) {
		item.children[0].attributes.viewBox = `0 0 ${Number(width)} ${Number(height)}`;
	}
};
