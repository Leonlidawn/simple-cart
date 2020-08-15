import React,{useState} from 'react';
import ToggleOff from '@/images/icons/toggle-off.svg';
import ToggleOn from '@/images/icons/toggle-on.svg';

const Toggle = ({value, onClick}) => {
	const [isToggleOn,setIsToggleOn] = useState(value);
	const defaultHandleOnClick = () =>{
		setIsToggleOn(!isToggleOn);
	}
	return (
		<div className={`toggle ${isToggleOn?'toggle--on':''}`} onClick={onClick? ()=>{defaultHandleOnClick();onClick();} : defaultHandleOnClick}>
			<img alt='toggle icon' src={isToggleOn? ToggleOn : ToggleOff}/>
		</div>
	)
}

export default Toggle;