import React from 'react';
import './Chip.scss';
import { ReactComponent as Cross } from '@/images/icons/cross.svg';
/**
 * @param {String} chipName 
 * @param {Boolean} isSelected 
 */
const Chip = ({chipName, isSelected}) => {
	return (
		<div className={`chip ${isSelected? 'chip--selected':''}`}>
				{chipName}
				{isSelected && <Cross width={10} height={10} className="cross"/>}
		</div>
	)
}

export default Chip;