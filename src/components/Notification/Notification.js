import React from 'react';

const Notification = ({message}) => {
	return (
		<div className={`notification ${isToggleOn?'toggle--on':''}`} onClick={onClick? ()=>{defaultHandleOnClick();onClick();} : defaultHandleOnClick}>
			<p>{message}</p>
		</div>
	)
}

export default Notification;