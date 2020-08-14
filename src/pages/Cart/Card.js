import React from 'react';
import './Card.scss';

const PageWrapper = (title, ...children) => {
	return (
		<div className="page-wrapper">
			<h1 className="page-title">
				{title}
			</h1>
			<div className="page-content">
				{children}
			</div>
		</div>
	)
}

export default PageWrapper;