import React from 'react';
import './TopMenu.scss';
import { ReactComponent as CartIcon } from './cart.svg'
import { Link } from 'react-router-dom';

const TopMenu = ( count ) => {
	const countProp = count>0 ? { "data-count": count } : {};
	return (
		<div className="top-menu">
			<nav className="top-menu__content">
				<Link to='/'>
					Shop
				</Link>
				<Link to='/cart'>
					<div className={`top-menu__content__cart ${count>0 ? 'top-menu__content__cart--filled':''}`} {...countProp} >
						<CartIcon />
					</div>
				</Link>
			</nav>
		</div>
	)
}

export default TopMenu;