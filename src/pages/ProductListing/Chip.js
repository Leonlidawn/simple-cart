import React from 'react';
import { ReactComponent as Cross } from '@/images/icons/cross.svg';
import './Chip.scss';
/**
 * @param {String} chipName 
 * @param {Boolean} isSelected 
 */
const Chip = ({ chipName, isSelected, onClick }) => {
	if (chipName !== 'All') {
		chipName += 's';
	}
	return (
		<div className={`chip ${isSelected ? 'chip--selected' : ''}`} onClick={onClick}>
			{chipName}
			{isSelected && <Cross width={10} height={10} className="cross" />}
		</div>
	)
}

export default Chip;