import React, { Component } from 'react';
import './app.css';
import CardList from './CardList';
import Title from './Title';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''	
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
		})  
		return(
			<main className=''>
				<Title title={'Robofriends'}/>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</main>
		);
	}
}

export default App;