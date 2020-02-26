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
		];

		this.state = {
			header: true,
			data : [
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
				],
		}
	}


	static getDerivedStateFromProps() {
		// this.setState ({
		// 	color: props.color,
		// })
		return null;

		// {
		// 	header:false
		// }
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.header !== this.state.header) {
			return true;
		}
		return false;
	}


	componentDidMount() {
		console.log(document.querySelector("button"));
	}

	printSomething(text) {
		console.log(text)
	}

	toggleHeader() {
			this.setState({
				header: !this.state.header,
			}, ()=> {
				console.log(this.state.header)
			})
	}

	render() {
		const {header,data} = this.state;
		return (
			<Fragment>
				{
					header && (
						<Header black search visible= {true} data={data} onPrint={(text)=>this.printSomething(text)}> 
						</Header>
					)

				}

				
				
				<Cards data={this.data}/>
				<button onClick={() => this.toggleHeader()}>Button</button>

			</Fragment>
		)
	}

}





export default App;