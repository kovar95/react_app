import React from 'react';
import './Header.scss';
import {Search} from '../Search/Search'
import logo from '../../images/logo.jpg';

const Header = ({black, search,children, onPrint}) => {

	// const renderSearch = ()=>{


	// 	if (props.search) {
	// 		return <Search/>;
	// 	} 

	// 	return null;
	// }

	return (
		<header className={`header ${black ? 'black' : ''}`} >
		{children}
		<img src={logo} className="logo"/>
		{search && <Search/>}
		{onPrint("Text for printing")}
		</header>
	)
}

export {Header};