
/**
 * remove duplicates from array
 * @param {Array} array 
 */
function unique( array ){
  return Array.from(new Set(array));
}

export {unique}