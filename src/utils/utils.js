
import { isEmpty } from 'lodash';

/**
 * remove duplicates from array
 * @param {Array} array 
 */
const unique = (array) => {
	return Array.from(new Set(array));
}

/**
 * get environment variables according to production and devlopment.
 * if variable is not declared in the environment, then it will use default
 * values configured in .env.development and .env.production files.
 * @param {string} key 
 */
const getEnvVariable =(key)=>{
	const environment = process.env.NODE_ENV;
	let value = process.env[key];

	if(!isEmpty(value)) return value;

	if( environment === 'development' || environment === 'production'){
		value = process.env[`REACT_APP_${key}`];
	}
	return value;
}

const debounce = (fn, time=500) => {
	let timeout;
	console.log(timeout);
  return function (...args) {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

export { unique, getEnvVariable, debounce }
