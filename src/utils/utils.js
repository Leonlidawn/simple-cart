
/**
 * remove duplicates from array
 * @param {Array} array 
 */
const unique = (array) => {
	return Array.from(new Set(array));
}



export { unique }
