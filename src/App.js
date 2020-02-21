import React, {Component, Fragment} from 'react';
import {Search} from './components/Search/Search'

class App extends Component {

	render() {
		return (
			<Fragment>
				<div>This is some react App</div>
				<span>This is some other text</span>
				<Search/>
			</Fragment>
		)
	}

}





export default App;