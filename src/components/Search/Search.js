import React, {Component} from 'react';
import './Search.scss'


class Search extends Component {

	render() {
		return(
			<input type="text" placeholder="Search" className="search" />
		)
	}

}

// const Search = () => {

// 	return (
// 		<input type="text" placeholder="Search" className="search"/>
// 	)

// }

export {Search};