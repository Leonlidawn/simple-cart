import React from 'react';
import QuantityButton from './QuantityButton';
import './ProductListingCard.scss';


const ProductListingCard = ({ product }) => {
	const { id, name, category, price, bgColor } = product;
	const image = require(`@/images/${id}.png`);

	return (
		<div className="product-listing-card">
			<div className="product__image" style={{ '--bg-color': bgColor }}>
				<img src={image} />
			</div>

			<div className="product__info">
				<div className="product__info__category">
					{category}
				</div>
				<div className="product__info__title">
					{name}
				</div>
				<div className="flex-group">
					<div className="product__info__price">
						{price}
					</div>
					<QuantityButton productId={id} />
				</div>
			</div>
		</div>
	)
}

export default ProductListingCard;