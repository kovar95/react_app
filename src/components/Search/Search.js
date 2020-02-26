import React, {Component} from 'react';
import './Search.scss'


class Search extends Component {

	state = {
		searchTerm:''
	}

	componentDidMount() {
		
	}


	onSearchChange(e) {
		this.setState({
			searchTerm: e.target.value
		})
	}

	render() {
		return(
			<input type="text" placeholder="Search" className="search" onChange={(e) =>this.onSearchChange(e)} value={this.state.searchTerm} />
		)
	}

}

// const Search = () => {

// 	return (
// 		<input type="text" placeholder="Search" className="search"/>
// 	)

// }

export {Search};