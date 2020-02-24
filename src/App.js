import React, {Component, Fragment} from 'react';
import {Search} from './components/Search/Search';
import './App.scss';



import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';

class App extends Component {

	constructor() {
		super();
		this.data = [
			{
				name: "Peter",
				age:54
			},
			{
				name: "John",
				age:34
			},
			{
				name: "Anna",
				age:51
			}
		]
	}

	printSomething(text) {
		console.log(text);
	}

	render() {
		return (
			<Fragment>
				<Header black search visible= {true} data={this.data} onPrint={(text)=>this.printSomething(text)}> 
				This is first header!
				</Header>
				<Cards data={this.data}/>

			</Fragment>
		)
	}

}





export default App;