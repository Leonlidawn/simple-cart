import React from 'react';
import './ProductListingCard.scss';


const ProductListinProductListingCardg = ({ product }) => {

	const { id, name, category, price, bgColor } = product;
	const image = require(`@/images/${id}.png`);

	return (
		<div className="product-listing-card">
			<div className="product__image" style={{ '--bg-color': bgColor }}>
				<img src={image} />
			</div>

			<div product="product__info">
				<div className="product__category">
					{category}
				</div>
				<div className="product__title">
					{name}
				</div>
				<div className="product__price">
					{price}
				</div>
			</div>
		</div>
	)
}

export default ProductListinProductListingCardg;