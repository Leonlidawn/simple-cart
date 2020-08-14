import React, { useState } from 'react';
import './ProductListing.scss';
import { Link } from 'react-router-dom';
import Chip from './Chip';
//this product information should be from 
import { products } from '@/data/products.json';
import { unique } from '@/utils';
import ProductListingCard from './ProductListingCard';
const ProductListing = () => {
	const categoryList = unique(['All', ...products.map((product) => product.category + 's')]);
	const [selectedList, setSelectedList] = useState(['All']);

	const handleClickOnChip = (category) => {
		if(category === 'All'){
			selectedList.includes(category)
			?setSelectedList([])
			:setSelectedList(['All']);
		}else{
			selectedList.includes(category)
			? setSelectedList(selectedList.filter(i => i !== category && i!=='All'))
			: setSelectedList(([category, ...selectedList]).filter(i => i!=='All'));
		}
	}
return (
	<div className="product-listing">
		<div className="product-listing__category-section">
			{categoryList.map((category) =>
				<div onClick={() => handleClickOnChip(category)}>
					<Chip key={category} chipName={category} isSelected={selectedList.includes(category)} />
				</div>
			)}
		</div>
		<div className="product-listing__product-section">
			{products.map((product) => {
				return (<div className="product-listing__product-section__product" key={product.id}><ProductListingCard product={product} /></div>);
			})}
		</div>
	</div>
)
}

export default ProductListing;