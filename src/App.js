import React, { Component } from 'react';
import './app.css';
import CardList from './CardList';
import Title from './Title';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(robots => this.setState({robots: robots}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value}); 
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
		})  
		if(this.state.robots.length === 0){
			return (
				<Title title={"Loading..."}/>
			)
		}else{
			return(
				<main className=''>
					<Title title={'Robofriends'}/>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</main>
			);
		}
	}
}

export default App;