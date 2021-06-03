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
    const {
        name,
        type,
        attributes: { width, height, viewBox },
    } = item;

    if (
        name === 'svg' &&
        type === 'element' &&
        width != null &&
        height != null &&
        viewBox == null &&
        Number.isNaN(Number(width)) === false &&
        Number.isNaN(Number(height)) === false
    ) {
        item.attributes.viewBox = `0 0 ${Number(width)} ${Number(height)}`;
    }
};
