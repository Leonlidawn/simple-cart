import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
	width: 'fit-content',
	position: 'fixed',
  bottom: '0px',
	zIndex: 10,
	display:'flex',
	alignItems:'flex-end',
	left:'50%',
	transform: 'translateX(-50%)'
}

function makeToast(Component) {
	const body = document.body;
	const showDom = document.createElement("div");
	Object.keys(styles).map(
		(key)=> showDom.style[key] = styles[key]
	)
	const time = 4000;
	body.appendChild(showDom);
	const close = () => {
		ReactDOM.unmountComponentAtNode(showDom);
		body.removeChild(showDom);
	}
	ReactDOM.render(
		<Component onClose={close} time={time} self={Component}/>,
		showDom
	);
}

export default { makeToast };