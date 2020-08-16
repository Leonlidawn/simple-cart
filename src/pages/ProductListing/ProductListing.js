import React, { useState, useContext } from 'react';
import { unique } from '@/utils/utils';
import ProductListingCard from './ProductListingCard';
import Chip from './Chip';
import { CartContext } from '@/contexts';

import './ProductListing.scss';

const ProductListing = () => {
	const { products } = useContext(CartContext);
	const categoryList = unique(['All', ...products.map((product) => product.category)]);
	const [selectedList, setSelectedList] = useState([]);

	const handleClickOnChip = (category) => {
		if (category === 'All') {
			selectedList.includes(category)
				? setSelectedList([])
				: setSelectedList(['All']);
		} else {
			selectedList.includes(category)
				? setSelectedList(selectedList.filter(i => i !== category && i !== 'All'))
				: setSelectedList(([category, ...selectedList]).filter(i => i !== 'All'));
		}
	}
	return (
		<div className="product-listing">
			<div className="product-listing__category-section">
				{categoryList.map((category) =>
					<Chip key={category} chipName={category} isSelected={selectedList.includes(category)} onClick={() => handleClickOnChip(category)} />
				)}
			</div>
			<div className="product-listing__product-section">
				{products.map((product) => {
					if (selectedList.length === 0 || selectedList.some((c) => c === product.category || c === 'All')) {
						return (<div className="product-listing__product-section__product" key={product.id}><ProductListingCard product={product} quantity={0} /></div>);
					}
				})}
			</div>
		</div>
	)
}

export default ProductListing;