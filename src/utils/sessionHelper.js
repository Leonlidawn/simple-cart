export const getSession = key => {
	return JSON.parse(sessionStorage.getItem(key));
};

export const updateSession = (key, newValue) => {
		sessionStorage.setItem(key, JSON.stringify(newValue));
};

export const removeSession = key => {
	sessionStorage.removeItem(key);
};

export default {getSession, updateSession, removeSession}