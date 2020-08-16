/**
 * generate random order id with given length.
 * @param {Number} length
 */
exports.generateOrderId = (length) => {
	return	[...Array(length)].map(() => Math.random().toString(36)[2]).join('').toUpperCase();
}
